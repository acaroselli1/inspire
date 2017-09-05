var express = require('express')
var bodyParser = require('body-parser')
var dbConnect = require('./config/db/mlab-config')
var port = process.env.PORT || 3000

var server = express()
server.listen(port,()=>{
  console.log('Listening on port: ', port)
})

server.use(express.static(__dirname + '/public' ))

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({extended:true})) 

var todoRouter = require('./routes/todos')
server.use('/api/todos', todoRouter)








//require your dependencies*



//tell your server what it needs to use*



//register your todos routes as api/routes*



//start your server listening....*