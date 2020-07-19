const express = require("express")

const User = require("../models/User")
const bcrypt = require("bcryptjs")
const nodemailer = require("nodemailer")
const hbs = require('nodemailer-express-handlebars')
const ejs = require('ejs')
const fs = require('fs')
//const Email = require('email-templates')
 
function sendEmail(to,name){

 

  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth:{
      user: 'louisgustavooliveira46@gmail.com',
      pass: 'Luizproject46'
    }
  })

ejs.renderFile("email/template.ejs",{name: name,img: 'email/img/logo.png'},function (err,data){
  if(err){
    console.log(err)
  }else{
    var mainOptions = {
      from: '"SocialSociety " <louisgustavooliveira46@gmail.com>',
      to: to,
      subject: 'Cadastro feito com sucesso!',
      attachments:[
        {filename: 'logo.png', path: 'email/img/logo.png',cid: 'logo',}
      ],
      html: data
  };
  
  transporter.sendMail(mainOptions, function (err, info) {
      if (err) {
          console.log(err);
      } else {
          console.log('Message sent: ' + info.response);
      }
  });
  }
})

  //  transporter.sendMail({
  //   from: '"SocialSociety " <louisgustavooliveira46@gmail.com>', // sender address
  //   to: to , // list of receivers
  //   subject: "Cadastro no SocialSociety", // Subject line
  //   text: "Conta criada com sucesso", // plain text body
  //   attachments: [
  //     {filename: 'logo.png', path: 'email/img/logo.png',cid: 'logo',}
  //   ],
    
  //   html: {
  //     path:'email/template.html'
  //   }, // html body
  // }).then(res =>{
  //   console.log(res)
  // }).catch(err=>{
  //   console.log(err)
  // })

}


module.exports = {
 users(req,res){

    User.findAll().then(users =>{

        res.statusCode = 200
        res.json(users)

    }).catch(err=>{
        res.send({error: err})
    })    
    
},

register(req,res){
    const {name,email,password,description,followers,following,photo,sexo} = req.body
    
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
                description: description,
                followers: followers,
                following: following,
                photo: photo,
                sexo: sexo
    
            }).then(()=>{

                sendEmail(email,name)
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

    
}

}




