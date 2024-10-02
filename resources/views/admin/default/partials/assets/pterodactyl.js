function pterodactylnodes() {
    window.wsc.send(JSON.stringify({ action: "details", type: "admin.pterodactyl", data: "nodes" }))
}

function showNodes(a) {
    let b = document.getElementById("admin.settings.panel.content")
    if (a.length !== 0) {
        b.innerHTML = "";
        let c = []
        let d = []
        c.push(`<div id="admin.settings.panel.content.node" class="w-full flex flex-wrap gap-4 text-zinc-400">`)
        for (let j of a) {
            i = j.attributes ? j.attributes : j
            d.push(i)
            c.push(`<div id="node${i.id}" onclick="showNode(${i.id})" class="w-max relative flex flex-col cursor-pointer hover:bg-zinc-900 hover:duration-300 duration-300 items-start shadow-md justify-left p-2 bg-zinc-900/30 border border-zinc-800/80 rounded-xl">
        <div class="w-full flex items-center justify-between space-x-4">
          <span class="text-gray-300">${i?.relationships.location?.attributes.short}: ${i.name}</span> <span class="text-gray-400">${i.memory}%</span>
        </div></div>`)
        }
        c.push('</div>')
        b.innerHTML = c.join('')
        setCacheValue("admin.panel.nodes", d)
    } else {
        b.innerHTML = `<div id="admin.settings.panel.content.node">No nodes available</div>`
    }
}

function getNodeDetails(a) {
    let b = getCacheValue("admin.panel.nodes")
    return b.find(i => i.id === a)
}

function closeNodeViewer() {
    let a = document.getElementById("admin.settings.panel.nodes.viewer");
    if (a) {
        a.remove();
    }
}

function format(a) {
  let b = parseFloat(a).toFixed(2);
  if (isNaN(b)) return "N/A";
  if (b.endsWith(".00")) b = b.slice(0, -3);
  return b;
}

function color(a) {
  let b = parseFloat(a).toFixed(2);
  if (isNaN(b)) return "N/A";
  if (b.endsWith(".00")) b = b.slice(0, -3);
  if (b <= 75) {
      return "bg-emerald-500";
  } else if (b <= 85) {
      return "bg-amber-500";
  } else if (b <= 95) {
      return "bg-rose-500";
  } else {
      return "bg-red-500";
  }
}

function showNode(a) {
    let data = getNodeDetails(a)
    let id = "admin.settings.panel.nodes.viewer.container"
    let b = document.getElementById(id)
    let d = 0;
    for (let i of data.relationships.servers.data) {
      d = d + i.attributes.limits.cpu
     }
     let cpuUsage = d / 100
    if (!b) {
        let c = document.createElement("div")
        c.className = "w-screen h-screen fixed top-0 left-0 right-0 bottom-0 pt-4 lg:pt-16 z-30"
        c.id = "admin.settings.panel.nodes.viewer"
        c.innerHTML = `<div class="w-full h-full relative backdrop-blur-xl bg-zinc-950/70 rounded-t-3xl pt-20 px-4 md:px-10" id="${id}"></div>`
        document.body.appendChild(c)
        b = document.getElementById(id)
    }
    b.innerHTML = /*template*/`
    <div class="top-0 fixed w-full pr-8 mt-2 md:pr-20 flex items-center justify-between p-2">
        <h1 class="text-zinc-200 text-xl">Node details of ${a}</h1>
        <button onclick="closeNodeViewer()" class="rounded-xl bg-zinc-900 hover:bg-zinc-900/50 duration-300 transition-all border border-zinc-100/10 p-2 text-zinc-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
        </button>
    </div>
    <div class="overflow-y-auto h-full w-full pr-2">
    <div class="w-full grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
    <div class="w-full col-span-2 h-max grid grid-cols-1 gap-4">
        <div class="flex bg-zinc-900/50 h-max border border-zinc-800/80 text-gray-300 rounded-xl flex-wrap content-start w-full">
            <h1 class="text-xl p-2 px-4 text-gray-200 flex justify-between w-full items-center">Overview</h1>
            <hr class="w-full border-b border-zinc-800/80">
            <div class="w-full mt-4 px-4 pb-4 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div class="flex flex-col">
                <h1 class="text-gray-300">Operating System:</h1>
                <span class="text-gray-200">${ data?.system?.system?.os }</span>
              </div>
              <div class="flex flex-col">
                <h1 class="text-gray-300">Architecture:</h1>
                <span class="text-gray-200">${ data?.system?.system?.architecture }</span>
              </div>
              <div class="flex flex-col">
                <h1 class="text-gray-300">Kernel:</h1>
                <span class="text-gray-200">${ data?.system?.system?.kernel_version }</span>
              </div>
              <div class="flex flex-col">
                <h1 class="text-gray-300">OS Type:</h1>
                <span class="text-gray-200 capitalize">${ data?.system?.system?.os_type }</span>
              </div>
              <div class="flex flex-col">
                <h1 class="text-gray-300">Filesystem:</h1>
                <span class="text-gray-200">${ data?.system?.docker?.storage?.filesystem }</span>
              </div>
              <div class="flex flex-col">
                <h1 class="text-gray-300">Docker version:</h1>
                <span class="text-gray-200">${ data?.system?.docker?.version }</span>
              </div>
              <div class="flex flex-col">
                <h1 class="text-gray-300">Online servers:</h1>
                <span class="text-gray-200">${ data?.system?.docker?.containers?.running }</span>
              </div>
              <div class="flex flex-col">
                <h1 class="text-gray-300">Offline servers:</h1>
                <span class="text-gray-200">${ data?.system?.docker?.containers?.stopped }</span>
              </div>
              <div class="flex flex-col">
                <h1 class="text-gray-300">Total servers:</h1>
                <span class="text-gray-200">${ data?.system?.docker?.containers?.total }</span>
              </div>
            </div>
        </div>
    </div>
    <div class="flex bg-zinc-900/50 border border-zinc-800/80 text-gray-300 rounded-xl flex-wrap content-start w-full">
        <h1 class="text-xl p-2 px-4 text-gray-200 flex justify-between w-full items-center">Resources</h1>
        <hr class="w-full border-b border-zinc-800/80">
        <div class="w-full p-2 py-4 grid grid-cols-1 gap-4">
            <div class="rounded-xl overflow-hidden relative border border-zinc-800/80">
                <div class="p-2 overflow-hidden z-40">
                    <div class="flex justify-between w-full">
                        <h1 class="text-gray-200 text-xl">Slots</h1>
                        <h1 class="text-gray-200 text-xl">${ data?.relationships?.servers?.data?.length } <span class="text-gray-300">of </span> ${ data.relationships.allocations.data.length }</h1>
                    </div>
                    <div class="w-full flex items-center text-base space-x-1 justify-between">
                        <div class="progress mt-3 h-1.5 bg-zinc-800">
                          <div class="is-active relative w-[${ format((data?.relationships?.servers?.data?.length / data?.relationships?.allocations?.data?.length) * 100) }%] overflow-hidden rounded-full ${ color(format((data.relationships.servers.data.length / data.relationships.allocations.data.length) * 100)) }"></div>
                        </div>
                        <h1 class="text-gray-300 text-xl">${ format((data?.relationships?.servers?.data?.length / data?.relationships?.allocations?.data?.length) * 100) }%</h1>
                      </div>
                </div>
                <div class="bg-gradient-to-r from-transparent via-zinc-700 to-transparent w-full h-0.5"></div>
            </div>
            <div class="rounded-xl overflow-hidden relative border border-zinc-800/80">
                <div class="p-2 overflow-hidden z-40">
                    <div class="flex justify-between w-full">
                        <h1 class="text-gray-200 text-xl">Memory</h1>
                        <h1 class="text-gray-200 text-xl">${ format(data.allocated_resources.memory / 1024) } <span class="text-gray-300">of </span> ${ format(data.memory / 1024) }GB</h1>
                    </div>
                    <div class="w-full flex items-center text-base space-x-1 justify-between">
                        <div class="progress mt-3 h-1.5 bg-zinc-800">
                          <div class="is-active relative w-[${ format((data.allocated_resources.memory / data.memory) * 100) }%] overflow-hidden rounded-full ${ color(format((data.allocated_resources.memory / data.memory) * 100)) }"></div>
                        </div>
                        <h1 class="text-gray-300 text-xl">${ format((data.allocated_resources.memory / data.memory) * 100) }%</h1>
                      </div>
                </div>
                <div class="bg-gradient-to-r from-transparent via-zinc-700 to-transparent w-full h-0.5"></div>
            </div>
            <div class="rounded-xl overflow-hidden relative border border-zinc-800/80">
                <div class="p-2 overflow-hidden z-40">
                    <div class="flex justify-between w-full">
                        <h1 class="text-gray-200 text-xl">Storage</h1>
                        <h1 class="text-gray-200 text-xl">${ format(data.allocated_resources.disk / 1024) } <span class="text-gray-300">of </span> ${ format(data.disk / 1024) }GB</h1>
                    </div>
                    <div class="w-full flex items-center text-base space-x-1 justify-between">
                        <div class="progress mt-3 h-1.5 bg-zinc-800">
                          <div class="is-active relative w-[${ format((data.allocated_resources.disk / data.disk) * 100) }%] overflow-hidden rounded-full ${ color(format((data.allocated_resources.disk / data.disk) * 100)) }"></div>
                        </div>
                        <h1 class="text-gray-300 text-xl">${ format((data.allocated_resources.disk / data.disk) * 100) }%</h1>
                      </div>
                </div>
                <div class="bg-gradient-to-r from-transparent via-zinc-700 to-transparent w-full h-0.5"></div>
            </div>
            <div class="rounded-xl overflow-hidden relative border border-zinc-800/80">
                <div class="p-2 overflow-hidden z-40">
                    <div class="flex justify-between w-full">
                        <h1 class="text-gray-200 text-xl">CPU</h1>
                        <h1 class="text-gray-200 text-xl">${ format(cpuUsage) } <span class="text-gray-300">of </span> ${ (data.system?.system?.cpu_threads) } threads</h1>
                    </div>
                    <div class="w-full flex items-center text-base space-x-1 justify-between">
                        <div class="progress mt-3 h-1.5 bg-zinc-800">
                          <div class="is-active relative w-[${ format((cpuUsage / data?.system?.system.cpu_threads) * 100) }%] overflow-hidden rounded-full ${ color(format((cpuUsage / data?.system?.system.cpu_threads) * 100)) }"></div>
                        </div>
                        <h1 class="text-gray-300 text-xl">${ format((cpuUsage / data?.system?.system.cpu_threads) * 100) }%</h1>
                      </div>
                </div>
                <div class="bg-gradient-to-r from-transparent via-zinc-700 to-transparent w-full h-0.5"></div>
            </div>
            <div class="rounded-xl overflow-hidden relative border border-zinc-800/80">
                <div class="p-2 overflow-hidden z-40">
                    <div class="flex justify-between w-full">
                        <h1 class="text-gray-200 text-xl">Servers Online</h1>
                        <h1 class="text-gray-200 text-xl">${ data?.system?.docker?.containers?.running } <span class="text-gray-300">of </span> ${ data?.system?.docker?.containers?.total }</h1>
                    </div>
                    <div class="w-full flex items-center text-base space-x-1 justify-between">
                        <div class="progress mt-3 h-1.5 bg-zinc-800">
                          <div class="is-active relative w-[${ format((data?.system?.docker?.containers?.running / data?.system?.docker?.containers?.total) * 100) }%] overflow-hidden rounded-full ${ color(format((data?.system?.docker?.containers?.running / data?.system?.docker?.containers?.total) * 100)) }"></div>
                        </div>
                        <h1 class="text-gray-300 text-xl">${ format((data?.system?.docker?.containers?.running / data?.system?.docker?.containers?.total) * 100) }%</h1>
                      </div>
                </div>
                <div class="bg-gradient-to-r from-transparent via-zinc-700 to-transparent w-full h-0.5"></div>
            </div>
        </div>
    </div>
</div>
</div>
    `
}