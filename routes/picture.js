const express = require("express");
const pictureController = require("../controllers/pictureController");
const upload = require("../config/multer");

const router = express.Router();

router.post("/", upload.single("file"), pictureController.create);
router.get("/", pictureController.findAll);
router.delete("/:id", pictureController.remove);

module.exports = router;
