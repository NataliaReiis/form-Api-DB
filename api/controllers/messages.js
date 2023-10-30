const express = require("express");
const router = express.Router();
const db = require("../db/models");

router.post("/", async (req, res) => {

    var data = req.body;

    await db.Message.create(data).then((dataMessage) => {
        return res.json({
            error: false,
            message: "Mensagem cadastrada com sucesso",
            data: dataMessage
        });
    }).catch(() => {
        return res.json({
            error: false,
            message: "Error: Mensagem cadastrada com sucesso"
        });
    });
});

module.exports = router;