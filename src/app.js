const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());

app.get("/", (req, res) => {
    res.json({
      message: "ok",
    });
});

module.exports = app;