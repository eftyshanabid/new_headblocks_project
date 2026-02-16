const Sequelize = require("sequelize");
const sequelize = require("../config/database");


const Website = sequelize.define('Website',{
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

Website.sync()
  .then(() => {
    console.log('Website table created successfully.');
  })
  .catch((err) => {
    console.error('Unable to create Website table:', err);
  });

module.exports = Website;