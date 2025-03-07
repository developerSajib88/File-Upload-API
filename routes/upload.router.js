const express = require("express");
const uploadController = require("../controllers/upload.controllers");
const uploadMiddleware = require("../middlewares/upload.middleware");
const router = express.Router();

router.post("/upload",uploadMiddleware.single("file"),uploadController.upload);

module.exports = router;