const path = require("path");
const rootDir = require("../utils/path")
const express = require("express");
const routes = express.Router();
const adminData = require('./admin');


routes.get('/users', (req, res, next)=>{
    const users = adminData.names
    res.render("user", {pageTitle: "Registered Users", userName: users})
});

exports.routes = routes;