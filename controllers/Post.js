const Post = require("../models/Posts")


module.exports = {
  async create(req,res){
    const {id_user,description,image,likes,deslikes} = req.body
    console.log(req.body)
    try{
      const saved = await Post.create({
        id_user: id_user,
        description: description,
        image: image,
        likes: likes,
        deslikes: deslikes
      })
     if(saved){
       res.status(200)
       res.send({message: "Success!"})
     }else{
      res.status(400)
      res.send({error: "Error!"})
     }
    }catch(err){
      res.status(500)
      res.send({error: "Error!"})
    }
      


  },

  async posts(req,res){
    try{
     const data = await Post.findAll()
      if(data != undefined && data){
        res.status(200)
        res.send({data: data})
      }else{
        res.status(400)
      res.send({error: "Error!"})
      }
    
    }catch(err){
      
      res.status(500)
      res.send({error: "Error!"})
    }
  },
  async likes(req,res){
    
    const {id } = req.params
   
   const result = await Post.increment({likes: 1}, {where:{id : id}})
    if(result){
      res.status(200)
      res.send({message: "Liked with success!"})

    }else{
      es.status(404)
      res.send({message: "Error!"})
    }
    
    

  },

  async deslike(req,res){
    
    const {id } = req.params
   
   const result = await Post.decrement({likes: 1}, {where:{id : id}})
    if(result){
      res.status(200)
      res.send({message: "Desliked with success!"})

    }else{
      es.status(404)
      res.send({message: "Error!"})
    }
  }
}