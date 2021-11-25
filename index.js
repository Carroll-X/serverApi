// let mysql = require('mysql')
// 引入express中间件
let express = require('express')
// 引入 body-parser 中间件
// 可以理解魏express的插件
// 让 eexpress 支持解析post数据
const bodyParser = require('body-parser')
// 创建服务器对象
const app = express()

const port = 8888


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

//解决跨域问题
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', '*')
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  res.header('X-Powered-By', ' 3.2.1')
  res.header('Content-Type', 'application/json;charset=utf-8')
  next()
})

const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: '121.5.101.177',
    port: 3306,
    user: 'root',
    password: 'Mysql123@',
    database: 'zhouyuxi'
  }
});

// console.log('knex:', knex)
app.get('/zyx/login', (req, response) => {
  knex('zyx_user')
    .select()
    .where({})
    .then(res => {
      console.log('res', res)
      response.send({
        code: 200,
        msg: '查询成功',
        data: res
      })
    })
})

app.listen(port, () => console.log('监听'))