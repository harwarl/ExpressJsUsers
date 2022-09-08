const path = require("path");
const express = require("express");
const rootDir = require("../utils/path")
const router = express.Router();

router.get('/add-user', (req, res, next)=>{
    res.sendFile(path.join(rootDir, "views", "home.html"));
});

router.post('/add-user', (req, res, next)=>{
    console.log(req.body);
    res.redirect('/admin/add-user');
});

module.exports = router;