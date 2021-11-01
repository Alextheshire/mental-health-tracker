const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require("bcrypt");

class Data extends Model {}

Data.init({
    date: {
        type: DataTypes.DATEONLY
    },
    selfharm_grade: {
        type: DataTypes.INTEGER
    },
    use_grade: {
        type: DataTypes.INTEGER
    },
    suicidal_thoughts_grade: {
        type: DataTypes.INTEGER
    },
    ovrl_emotion_grade: {
        type: DataTypes.INTEGER
    },
    self_accept_grade: {
        type: DataTypes.INTEGER
    },
    anger_grade: {
        type: DataTypes.INTEGER
    },
    joy_grade: {
        type: DataTypes.INTEGER
    },
    shame_grade: {
        type: DataTypes.INTEGER
    },
    sadness_grade: {
        type: DataTypes.INTEGER
    },
    fear_grade: {
        type: DataTypes.INTEGER
    },
    notes: {
        type: DataTypes.TEXT
    }
    
},{
    timestamps:false,
    sequelize,
});

module.exports = Data;