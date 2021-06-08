const { request } = require('express')
const bodyParser = require('body-parser')
const express = require('express')
const cors = require('cors')
const app = express()
const morgan = require('morgan')
const mysql = require('mysql')
const myConnection = require('express-myconnection')
//importar rutas
const costumersRoutes=  require('./routes/customer')
//settings
app.listen(3000)
app.use(cors())
app.use(bodyParser.json());
//middlewares
app.use(morgan('dev'))
app.use(myConnection(mysql,{
  host:'localhost',
  user:'root',
  password:'12345',
  port:'3306',
  database:'nutriologo'
},'single'))
app.use(express.urlencoded({extended:false}))
 //routes
app.use('/',costumersRoutes)



app.listen(app.get('port'), ()=>{
  console.log('Server on port 3000')
})
