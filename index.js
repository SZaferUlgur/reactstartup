var cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

dotenv.config();
const PORT = process.env.PORT;

const app = express();
app.get("/", (req, res) => res.send("API Çalışıyor"));

// Init middleware
app.use(bodyParser.json());
app.use(express.json({ extended: false }));

app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

app.listen(PORT, () => console.log(`MSSQL Sunucu ${PORT} Portunda Çalışıyor`));
