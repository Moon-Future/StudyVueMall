const Koa = require('koa')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const cors = require('koa2-cors')
const mongoose = require('mongoose')
const { connect, initSchemas } = require('./database/init.js')
const user = require('./appApi/User.js')
let goods = require('./appApi/goods.js')
const router = new Router()
const app = new Koa()

// 立即执行函数
;(async () =>{
  await connect()
  initSchemas()
})()

// app.use(async (ctx) => {
//   ctx.body = '<h1>hello Koa2</h1>'
// })

app.use(bodyParser())
app.use(cors())

router.use('/user', user.routes())
router.use('/goods', goods.routes())
app.use(router.routes())
app.use(router.allowedMethods())

app.listen(3000, () => {
  console.log('Server starting at port 3000...')
})
