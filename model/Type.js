const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const type = sequelize.define('Type',{
     name:{
      type:DataTypes.STRING,
      allowNull:false
    },
    status:{
      type:DataTypes.STRING,
      allowNull:false }
})

type.sync()
.then(()=>{
  console.log("type table created successfully");
})
.catch((err)=>{
  {
    console.log("error creating type table",err)
  }
})

module.exports = type;