const express = require("express")
const server = express()
const cors = require("cors")
const PORT = 3001
const {router} = require("./routes/index")

const {getCharById} = require("./controllers/getCharById")

server.use(cors())

server.use(express.json())

server.use("/rickandmorty", router)

server.listen(PORT, ()=>{
  console.log("Server raised in port: " + PORT);
})
