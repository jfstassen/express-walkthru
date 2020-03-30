const express = require("express");
const path = require("path");
const rootDir = require("../util/path");

const router = express.Router();

const adminData = require("./admin");

router.get("/", (req, res, next) => {
  // res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
  // console.log(adminData.products);
  // res.sendFile(path.join(rootDir, "views", "shop.html"));
  const products = adminData.products;
  console.log(products);
  res.render("shop", { products, pageTitle: "Shop", path: "/" }); // RENDER DEFAULT VIEWS ENGINE WITH FILENAME, and pass data to the views
});

module.exports = router;
