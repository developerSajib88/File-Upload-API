const mongoose = require("mongoose");

const uploadSchema = mongoose.Schema({
    image: {
        type: String,
        require: [true, "Image not found!"]
    }
});

module.exports = mongoose.model("files",uploadSchema);