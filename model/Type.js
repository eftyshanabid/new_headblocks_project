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

Type.sync()
  .then(() => {
    console.log('Type table created successfully.');
    })
    .catch((err) => {
    console.error('Unable to create Type table:', err);
    });

module.exports = Type;