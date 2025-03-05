const express = require("express");
const { upload } = require("../controllers/upload.controllers");
const router = express.Router();

router.post("/upload",upload);

module.exports = router;