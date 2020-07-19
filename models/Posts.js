const Sequelize = require("sequelize")
const connection = require("../database/db")
const User = require("./User")


const Post = connection.define("posts",{
id_user:{
  type: Sequelize.INTEGER,
  allowNull: false
},
description:{
  type: Sequelize.STRING,
  allowNull: false
},
image: {
  type: Sequelize.STRING,
  allowNull: true
},
likes:{
  type: Sequelize.INTEGER,
  allowNull: true
},
deslikes:{
  type: Sequelize.INTEGER,
  allowNull: true
}




})

// Post.sync({force:true})


//User.belongsTo(Post)

module.exports = Post