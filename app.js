const path = require("path");
const rootDir = require("./utils/path")
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const homeRoute = require("./routes/home");
const userRoute = require("./routes/users");

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({extended: true}));

app.use('/admin', homeRoute);
app.use(userRoute);
app.use('/', (req, res, next)=>{
    res.sendFile(path.join(rootDir, "views", "404.html"));
});

app.listen(3000);