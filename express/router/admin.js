/** */
const express = require('express')
const path = require('path')
const router = express.Router()

router.use('/add', (req, res, next) => {
  res.send('<h1>hello,express</h1>')
  next()
})

module.exports = router