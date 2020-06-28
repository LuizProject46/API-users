const Sequelize = require("sequelize")

conn = new Sequelize("projetoAPI","root","",{
    host : "localhost",
    dialect: "mysql",
    timezone: "-03:00"
})


module.exports = conn