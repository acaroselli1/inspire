//Your MLAB database should be here 
var mongoose = require('mongoose')
var connection = mongoose.connection

mongoose.connect('mongodb://student:student@ds051788.mlab.com:51788/inspire', {
  server:{socketOptions:{keepAlive: 300000, connectTimeoutMS: 30000}},
  replset:{socketOptions:{keepAlive: 300000, connectTimeoutMS: 30000}},
})

connection.on('error', (err) =>{
  console.log('MLab Error ', err)
})

connection.once('open', ()=>{
  console.log('Connected to MLab')
})