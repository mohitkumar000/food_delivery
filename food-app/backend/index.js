const express = require('express')
const app = express()
const port = 9000
const Mongodb = require('./db')
const mongoose = require('mongoose');


Mongodb();


    




app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use(express.json())
app.use('/api',require("./Routes/CreateUser"))
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})