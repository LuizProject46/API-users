const express = require("express")
const router = express.Router()
const User = require("../models/User")
const bcrypt = require("bcryptjs")
const middleware = require("../middleware/middleware")

router.get("/users",middleware,(req,res)=>{

    User.findAll().then(users =>{

        res.statusCode = 200
        res.json(users)

    }).catch(err=>{
        res.send({error: err})
    })    
    
})

router.post("/register",(req,res)=>{
    const {name,email,password,phone} = req.body

    User.findOne({
        where :{
            email: email
        }
    }).then(user =>{
        if(user == null || user == undefined ){
            var salt = bcrypt.genSaltSync(10)
            var hash = bcrypt.hashSync(password,salt)
            User.create({
                name: name,
                email: email,
                password: hash,
                phone: phone
    
            }).then(()=>{
                res.status(200)
                res.send({message: "Success!",status: 200})
            })


        }else{
            res.status(400)
            res.send({error : "Email already exist!"})
        }
    }).catch(err => {
        res.json(err)
    })

    
})

module.exports = router


