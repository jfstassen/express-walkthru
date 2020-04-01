const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const errorController = require("./controllers/error")

app.set("view engine", "pug"); // global value
app.set("views", "views"); // set the view directory: Default value, modified value

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public"))); // give access to public folder like css etc

app.use("/admin", adminRoutes); //only routes starting with /admin will go in admin routes file
app.use(shopRoutes);

app.use(errorController.get404);


app.listen(3000);
