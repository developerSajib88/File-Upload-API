const Upload = require("../models/upload.models");

module.exports.upload = async (req,res)=>{
    
    const uploaded = await Upload({
        file: req.file.filename
    });
    await uploaded.save();
    console.log(uploaded);

    res.status(200).json({
        status: 200,
        message: "success",
        file: uploaded.file
    });
}