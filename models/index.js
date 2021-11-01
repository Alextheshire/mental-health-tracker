const User = require("./User");
const Data = require("./Data");

User.hasMany(Data,{
    onDelete:"CASCADE"
});
Data.belongsTo(User);

module.exports={
    User,
    Data
};