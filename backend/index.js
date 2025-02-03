// const express = require("express")
// const app = express()


// app.get("/",(req,res)=>{
//     res.send("server is working")
// })

// app.listen(8000,(req,res)=>{
//     console.log("server is running in post 8000")
// })


const express = require("express")
const app = express()

const cors = require("cors")
const mongoose =require("mongoose")
const bodyParser = require('body-parser');

require("dotenv").config()
const empRoute = require("./routes/empRoutes")

mongoose.connect(process.env.DBCONNECTION).then(()=>{
    console.log("port is working")
})

const port = process.env.PORT || 8001
app.use(cors())

app.get("/",(req,res)=>{
    res.send("server is working")
})






// Parse incoming requests with urlencoded payloads
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/employee",empRoute)

app.listen(port,(req,res)=>{
    console.log("server is running in port 8000")
})