const express = require("express")
const router = express.Router();
const jwt = require("jsonwebtoken")
const {secret} = require("../auth/secret.json")
const bcrypt = require("bcryptjs")
const User = require("../models/User");


router.post("/authenticate",(req,res)=>{
var {email, password} = req.body

if(email != undefined){
    User.findOne({
        where :{
            email: email
        }
    }).then(user =>{
        if(user != undefined){
            var pass = bcrypt.compare(password,user.password)
            if(pass){

                jwt.sign({
                    id: user.id,
                    email: user.email
                },secret,{expiresIn: "24h"},(err,token)=>{
                    if(err){
                        res.status(400)
                        res.json({err: "Error!"})
                    }else{
                        res.status(200)
                        res.json({token: token})
                    }
                })
            }else{
                res.status(401)
                res.send({message: "Invalid credentials!"})
            }
        }
    }).catch(err =>{
        res.status(400)
    })
}



})

module.exports = router;