const { DataTypes, INTEGER } = require('sequelize');
const sequelize = require('../config/database');

const Project = sequelize.define('Project',{
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
        type:INTEGER,
        allowNull:false
    },
    org_id:{
       type:INTEGER,
        references:{
            model:"Organizations",
            key: "id"
        }
    }
})

module.exports = Project;