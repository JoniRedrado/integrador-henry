const express = require("express")
const server = express()
const cors = require("cors")
const PORT = 3001
const {router} = require("./routes/index")
const {conn} = require('./DB_connection')

server.use(cors())

server.use(express.json())

server.use("/rickandmorty", router)

conn.sync({force:false}).then(()=>{
  
  server.listen(PORT, ()=>{
    console.log("Server raised in port: " + PORT);
  })
})

