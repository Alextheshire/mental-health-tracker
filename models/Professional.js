const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require("bcrypt");

class Professional extends Model {}

Professional.init({

    password:{
        type:DataTypes.STRING,
        validate:{
            len:[8]
        }
    },
    email:{
        type:DataTypes.STRING,
        unique:true,
        validate:{
            isEmail:true
        }
    },
    first_name: {
        type:DataTypes.STRING,

    },
    last_name: {
        type:DataTypes.STRING,
        
    },
    title:{
        type:DataTypes.STRING,
    },
    institution: {
        type:DataTypes.STRING
    }
},{
    hooks:{
        beforeCreate(newPro){
            newPro.password = bcrypt.hashSync(newPro.password,5);
            return newPro;
        },
        beforeUpdate(newPro){
            newPro.password = bcrypt.hashSync(newPro.password,5);
            return newPro;
        }
    },
    timestamps:false,
    sequelize,
});

module.exports = Professional;