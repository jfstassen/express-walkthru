const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.set("view engine", "pug"); // global value
app.set("views", "views"); // set the view directory: Default value, modified value

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public"))); // give access to public folder like css etc

app.use("/admin", adminData.routes); //only routes starting with /admin will go in admin routes file
app.use(shopRoutes);

app.use((req, res, next) => {
  // res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
  res.status(404).render("404", {docTitle:"404 Error page"})
});
// app.use('/add-product', (req, res, next) => {
//   res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">add product</button></form>')
// })

// app.post('/product', (req, res, next) => {
//   console.log(req.body)
//   res.redirect("/")
// })

// const server = http.createServer(app)

app.listen(3000);
