const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const Type = sequelize.define('Type',{
     name:{
      type:Sequelize.DataTypes.STRING,
      allowNull:false
    },
    status:{
      type:Sequelize.DataTypes.STRING,
      allowNull:false }
})

module.exports = Type;