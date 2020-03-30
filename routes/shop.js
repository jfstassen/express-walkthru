const express = require("express");
const path = require("path");
const rootDir = require("../util/path");

const router = express.Router();

const Admindata = require("./admin");

router.get("/", (req, res, next) => {
  // res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
  console.log(Admindata.products);
  res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = router;
