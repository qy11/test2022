//

const express = require('express')
const bodyParser = require("body-parser")
const path = require('path')
const app = express()

app.set('view engine', 'ejs')
app.set('views', 'views')

const adminData = require('./routes/admin')
const shopRoutes = require('./routes/shop')

const errorController = require('./controllers/error')

// app.use('/', (req, res, next) => {
//   console.log('这个中间件一直都会执行');
//   next()
// })

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public'))) // css引入
app.use('/admin', adminData.routes)

app.use(shopRoutes)

app.use(errorController.get404)


app.listen(3003)
