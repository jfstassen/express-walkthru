const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/admin', adminRoutes); //only routes starting with /admin will go in admin routes file
app.use(shopRoutes);

app.use((req, res, next)=> {
  res.status(404).send("page not found");
  
})
// app.use('/add-product', (req, res, next) => {
//   res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">add product</button></form>')
// })

// app.post('/product', (req, res, next) => {
//   console.log(req.body)
//   res.redirect("/")
// })

// const server = http.createServer(app)

app.listen(3000);
