const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const connDB = require("./database/db")
const cors = require("cors")
const router = require("./routes/routes")

app.use(cors({}))

connDB.authenticate().then(()=>{
    console.log("Connected!")
}).catch((err)=>{
    console.log(err)
})


app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(router)

app.get("/",(req,res)=>{

    res.send({ message : "Bem vindo à API "})
})
app.listen(3001, ()=>{
    console.log("Server running in port 3001")
})