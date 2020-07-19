const Sequelize = require("sequelize")
const connection = require("../database/db")
const Post = require('./Posts')

const User = connection.define('users',{
    name : {
        type: Sequelize.STRING,
        allowNull: false
    },
    email:{
        type: Sequelize.STRING,
        allowNull: false
    },
    password:{
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: true
    },
    followers:{
      type: Sequelize.INTEGER,
      allowNull: true
    },
    following:{
      type: Sequelize.INTEGER,
      allowNull: true
    },
    photo: {
      type: Sequelize.STRING,
      allowNull: true
    },
    sexo:{
      type: Sequelize.STRING,
      allowNull: false
    }
})
// User.sync({force:true})
// User.hasMany(Post)
// Post.belongsTo(User)

module.exports = User