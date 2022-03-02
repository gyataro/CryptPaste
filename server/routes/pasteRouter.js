const express = require("express");

const pasteController = require("../controllers/pasteController");

const router = express.Router();

router
    .route("/")
    .get(pasteController.getAllPastes)
    .post(pasteController.createPaste);

router
    .route("/:id")
    .get(pasteController.getOnePaste)
    .patch(pasteController.updatePaste)
    .delete(pasteController.deletePaste);

module.exports = router;