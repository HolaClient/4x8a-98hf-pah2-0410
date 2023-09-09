module.exports.load = async function (app, db) {
    app.get("/users/id/get/hcid/:dcid", async (req, res) => {
      try {
        const dcid = req.params.dcid;
        if (!dcid) {
          return res.json({ "success": false, "message": alerts.MISSINGUSER });
        }
        const hcid = await db.get("hcid-" + dcid);
        if (!hcid) {
          return res.json({ "success": false, "message": alerts.INVALIDUSER });
        }
        res.json({ "success": true, "message": "", "id": hcid });
      } catch (error) {
        console.error('Error occurred while changing DCId to HCId', error);
        res.json({ "success": false, "message": "An error occurred." });
      }
    });
  }
  