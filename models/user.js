const {DataTypes}=require('sequelize');
const sequelize=require('../util/database.js');

const User=sequelize.define('user',{
    name:{
        type:DataTypes.STRING,
        primaryKey:true,
    },
    phone:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
    }
});

module.exports=User;