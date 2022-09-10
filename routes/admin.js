const path = require("path");
const rootDir = require("../utils/path");
const express = require("express");
const routes = express.Router();

const usernames = [];

routes.get('/add-user', (req, res, next)=>{
    res.render("add-user.pug", {pageTitle: "Add Users"});
});

routes.post('/add-user', (req, res, next)=>{
    usernames.push(req.body);
    res.redirect('/users');
});

exports.routes = routes;
exports.names = usernames;