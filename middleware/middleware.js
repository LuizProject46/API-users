const {secret} = require("../auth/secret.json")
const jwt = require("jsonwebtoken")

middleware = (req,res,next) =>{

    const authToken = req.headers['authorization']
    if(authToken != undefined){
        var bearer = authToken.split(" ")
        var token = bearer[1]
        jwt.verify(token,secret,(err,data)=>{
            if(err){
                res.status(401)
                res.json({message: "Invalid token!"})
            }else{
                req.token = token
                req.loggedUser = {id: data.id,email:data.email}
                next()
            }
        })
    }else{
        res.json({err: "ERRO!"})
    }
    

}

module.exports = middleware