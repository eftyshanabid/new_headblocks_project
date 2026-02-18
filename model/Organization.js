const { DataTypes} = require('sequelize');
const sequelize = require('../config/database');

const Org = sequelize.define('Organization',{
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    website_id:{
        type:DataTypes.INTEGER,
        references:{
            model : 'Websites',
            key:"id"
        }
    },
    contact:{
        type:DataTypes.STRING,
        allowNull:false
    },
    address:{
        type:DataTypes.STRING,
        allowNull:false
    }
})

Org.sync().then(()=>{
    console.log("Organization table created successfully")
})
.catch((err)=>{
    confirm.log(err)
})

module.exports = Org;