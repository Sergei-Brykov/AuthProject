require('dotenv').config()
const http = require('http')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const path = require('path')
const Router = require('./routes/router.js')

const server = http.createServer((req, res) => {
  const router = new Router(req, res)
})
server.listen(3000)

// console.log(process.env.ADMIN)

mongoose.connect('mongodb://db:27017/study-board', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}).then(
  console.log('DB up!!!')
).then(

)

let token = jwt.sign({ foo: 'bar' }, 'shhhhh')
console.log(token)