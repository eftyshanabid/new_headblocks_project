const Sequelize = require("sequelize");
const sequelize = require("../config/database");


const website = sequelize.define('Website',{
    name:{
        type:Sequelize.DataTypes.STRING,
        allowNull:false
    },
     url:{
      type:Sequelize.DataTypes.STRING,
      allowNull:false
    },
    type_id:{
        type:Sequelize.DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:'Types',
            key:'id'
        }
    },
    status:{
        type:Sequelize.DataTypes.STRING,
        allowNull:false
    },
    is_active:{
        type:Sequelize.DataTypes.BOOLEAN,
        allowNull:false
    }

})

website.sync()
.then(()=>{
    console.log("website table created successfully");
})
.catch((err)=>{
    console.log("error creating website table",err)
})

module.exports = website;