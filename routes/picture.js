const express = require("express");
const router = express.Router();

const pictureController = require("../controllers/pictureController");

router.post("/", pictureController.create);

module.exports = router;
