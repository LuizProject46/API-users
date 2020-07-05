const Sequelize = require("sequelize")
const connection = require("../database/db")

User = connection.define('users',{
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
//User.sync({force:false}).then(()=>{})
module.exports = User