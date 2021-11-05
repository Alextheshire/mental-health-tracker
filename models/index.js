const User = require("./User");
const Data = require("./Data");
const Professional = require("./Professional");

User.hasMany(Data,{
    onDelete:"CASCADE"
});
Data.belongsTo(User);

Professional.hasMany(User, {
    onDelete: "SET NULL"
});
User.belongsTo(Professional)

module.exports={
    User,
    Data,
    Professional
};