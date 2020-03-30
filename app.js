const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public"))); // give access to public folder like css etc

app.use("/admin", adminData.routes); //only routes starting with /admin will go in admin routes file
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
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
