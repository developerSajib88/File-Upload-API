const mongoose = require("mongoose");

const uploadSchema = mongoose.Schema({
    file: {
        type: String,
        require: [true, "Image not found!"]
    }
});

module.exports = mongoose.model("files",uploadSchema);