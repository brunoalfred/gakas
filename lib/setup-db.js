// Connect to DB
const mongoose = require('mongoose')
require("dotenv").config();


mongoose.Promise = Promise

mongoose.connection.on('connected', () => {
  console.log('Connection Established')
})

mongoose.connection.on('reconnected', () => {
  console.log('Connection Reestablished')
})

mongoose.connection.on('disconnected', () => {
  console.log('Connection Disconnected')
})

mongoose.connection.on('close', () => {
  console.log('Connection Closed')
})

mongoose.connection.on('error', (error) => {
  console.log('ERROR: ' + error)
})

const DB_run = async () => {
  await mongoose.connect(process.env.DB_URI, {
   
   
   
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
}

module.exports = DB_run;

// run().catch(error => console.error(error))