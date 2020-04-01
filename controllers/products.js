exports.getAddProduct = (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add a Product",
    path: "/admin/add-product"
  });
};

const products = [];

exports.postAddProduct = (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  res.render("shop", { products, pageTitle: "Shop", path: "/" }); // RENDER DEFAULT VIEWS ENGINE WITH FILENAME, and pass data to the views
};
