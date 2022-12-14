const path = require("path");
const rootDir = require("./utils/path")
const express = require("express");
const bodyParser = require("body-parser");
const adminData = require("./routes/admin");
const userData = require("./routes/users");
const { dirname } = require("path");

const app = express();

app.set('view engine', 'pug');
app.set("views", "views");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.routes);
app.use(userData.routes);

app.use('/', (req, res, next)=>{
    res.status(404).render("404", {pageTitle: "Awwal - Page Not Found"});
});


app.listen(3030);