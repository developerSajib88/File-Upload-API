require("dotenv").config();

const dev = {
    app:{
        port: process.env.PORT,
    },
    db:{
        url: process.env.DB_URL || "mongodb://localhost:27017/mydatabase"
    }
}

module.exports = dev;