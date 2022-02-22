const express = require('express')
const path = require("path")
const router = express.Router()
const rootDir = require('../utils/path')

const products = []
/**
 *  /admin/add-product
 *  /admin/product  
 */
router.get('/add-product', (req, res, next) => {
  // res.send('<form action="/product" method="POST"><input type="text" name="title"/><button type="submit">提交</button></form>')
  // res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
  res.render('add-product', { pageTitle: "添加产品", path: '/admin/add-product' })
})


router.post('/product', (req, res, next) => {
  // console.log(req.body); // {title:'input输入的内容'}
  products.push({
    title: req.body.title
  })
  res.redirect('/')
})



exports.routes = router;
exports.products = products;