const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const userController = require("./routes/User")
const connDB = require("./database/db")
const Auth = require("./routes/Auth")
connDB.authenticate().then(()=>{
    console.log("Connected!")
}).catch((err)=>{
    console.log(err)
})


app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


app.use("/",userController)
app.use("/",Auth)

app.get("/",(req,res)=>{

    res.send({ message : "Bem vindo à API "})
})
app.listen(3000, ()=>{
    console.log("Server running")
})