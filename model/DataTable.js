const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const DataTable = sequelize.define('DataTable',{
    project_id:{
        type: DataTypes.INTEGER,
        references:{
            model : "Projects",
            key : "id"
        }
    },
    website_id:{
        type:DataTypes.INTEGER,
        references:{
            model:"Websites",
            key : "id"
        }
    },
    tier:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
})

DataTable.sync()
.then(()=>{
    console.log("datatable created successfully");
})
.catch((err)=>{
    console.log("error creating data table",err)
})

module.exports = DataTable;