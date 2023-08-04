const fetch = require("node-fetch");
const chalk = require("chalk");
const settings = require("../../settings.json");
const panelUrl = settings.pterodactyl.domain;
const panelApiKey = settings.pterodactyl.key;
const panelUserKey = settings.pterodactyl.account_key;
const scanInterval = settings.anti_pteroVM.interval * 60 * 1000;

module.exports.load = function (app, db) {
  async function suspendServer(serverId, serverName, serverOwner, serverI) {
    try {
      console.log(
        chalk.cyan("[") +
          chalk.white("HolaClient AntiVM") +
          chalk.cyan("]") +
          chalk.white(` Suspending server ${serverName}...`)
      );

      const serverDetailsResponse = await fetch(
        `${panelUrl}/api/application/servers/${serverI}/details`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${panelApiKey}`,
            "Content-Type": "application/json",
            Accept: "application/vnd.pterodactyl.v1+json",
          },
          body: JSON.stringify({
            name: serverName,
            user: serverOwner,
            description: "Server suspended by HolaClient due to PteroVM.",
          }),
        }
      );

      if (!serverDetailsResponse.ok) {
        throw new Error(
          `Failed to update server details for server with ID ${serverId}: ${serverDetailsResponse.status} ${serverDetailsResponse.statusText}`
        );
      }

      const suspendResponse = await fetch(
        `${panelUrl}/api/application/servers/${serverI}/suspend`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${panelApiKey}`,
            "Content-Type": "application/json",
            Accept: "application/vnd.pterodactyl.v1+json",
          },
        }
      );

      if (!suspendResponse.ok) {
        throw new Error(
          `Failed to suspend server with ID ${serverId}: ${suspendResponse.status} ${suspendResponse.statusText}`
        );
      }

      console.log(
        chalk.cyan("[") +
          chalk.white("HolaClient AntiVM") +
          chalk.cyan("]") +
          chalk.white(` Server ${serverName} suspended successfully.`)
      );
    } catch (error) {
      console.error(`Failed to suspend server with ID ${serverId}:`, error);
    }
  }

  async function scanServerFiles(serverId, serverName, serverOwner, serverI) {
    try {
      const serverFilesResponse = await fetch(
        `${panelUrl}/api/client/servers/${serverId}/files/list`,
        {
          headers: {
            Authorization: `Bearer ${panelUserKey}`,
            Accept: "application/vnd.pterodactyl.v1+json",
          },
        }
      );

      if (!serverFilesResponse.ok) {
        throw new Error(
          `Failed to retrieve files for server with ID ${serverId}: ${serverFilesResponse.status} ${serverFilesResponse.statusText}`
        );
      }

      const serverFilesData = await serverFilesResponse.json();
      const files = serverFilesData.data;

      const foundFiles = files.filter(
        (file) =>
          file.attributes.name === "st.sh" ||
          file.attributes.name === "lib32" ||
          file.attributes.name === "lib64" ||
          file.attributes.name === "proot" ||
          file.attributes.name === "mnd" ||
          file.attributes.name === "dev" ||
          file.attributes.name === "var" ||
          file.attributes.name === "sbin" ||
          file.attributes.name === "usr" ||
          file.attributes.name === "boot" ||
          file.attributes.name === "libx32"
      );

      if (foundFiles.length > 0) {
        await suspendServer(serverId, serverName, serverOwner, serverI);
      }
    } catch (error) {
      console.error(
        `Failed to scan files for server with ID ${serverId}:`,
        error
      );
    }
  }

  async function scanServers() {
    try {
      console.log(" ");
      console.log(
        chalk.gray("[⛏️]") +
          chalk.cyan("[") +
          chalk.white("HolaClient") +
          chalk.cyan("]") +
          chalk.white(" Scanning servers for Ptero-VM...")
      );
      const serversResponse = await fetch(
        `${panelUrl}/api/application/servers`,
        {
          headers: {
            Authorization: `Bearer ${panelApiKey}`,
            Accept: "application/vnd.pterodactyl.v1+json",
          },
        }
      );

      if (!serversResponse.ok) {
        throw new Error(
          `Failed to retrieve server list: ${serversResponse.status} ${serversResponse.statusText}`
        );
      }

      const serversData = await serversResponse.json();
      const servers = serversData.data;

      for (const server of servers) {
        const serverId = server.attributes.identifier;
        const serverI = server.attributes.id;
        const serverName = server.attributes.name;
        const serverOwner = server.attributes.user;
        await scanServerFiles(serverId, serverName, serverOwner, serverI);
      }

      console.log(" ");
      console.log(
        chalk.gray("[✅]") +
          chalk.cyan("[") +
          chalk.white("HolaClient") +
          chalk.cyan("]") +
          chalk.white(" Finished scanning for Ptero-VM servers!")
      );
    } catch (error) {
      console.error("Failed to retrieve server list:", error);
    }
  }

  if (settings.anti_pteroVM.enabled == true) {
    setInterval(scanServers, scanInterval);

    scanServers();
  } else {
    return;
  }
};
