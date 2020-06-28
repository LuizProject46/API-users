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
    phone: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})
//User.sync({force:false}).then(()=>{})
module.exports = User