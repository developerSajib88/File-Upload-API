const express = require("express");
const app = express();
const cors = require("cors");
const { notFound } = require("./middlewares/notfound.middleware");
const { error } = require("./middlewares/error.middleware");

const uploadRouter = require("./routes/upload.router");

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.use(uploadRouter);


app.use(notFound);
app.use(error);

module.exports = app;