const path = require('path');

const rootDir = require('../util/path');

const express = require('express');

const router = express.Router();

const products = [];

router.get('/addproduct',(req, res, next) => {
    res.sendFile(path.join(rootDir,'views','add-product.html'));
});

router.post('/addproduct',(req, res, next)=>{
    products.push({ title : req.body.title });
    res.redirect('/');
});

exports.routes = router;
exports.products = products
