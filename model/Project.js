const { DataTypes} = require('sequelize');
const sequelize = require('../config/database');

const project = sequelize.define('Project',{
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    status:{
        type:DataTypes.ENUM('ongoing','finished','pending'),
        defaultValue : 'pending',
        allowNull:false
    },
    budget:{
        type:DataTypes.STRING,
        allowNull:false
    },
    tier:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    org_id:{
       type:DataTypes.INTEGER,
        references:{
            model:"Organizations",
            key: "id"
        }
    }
})

project.sync()
.then(()=>{
    console.log("project table created successfully");
})
.catch((err)=>{
    console.log("error creating project table",err)
})

module.exports = project;
