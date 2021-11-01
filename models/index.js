const User = require("./User");
const Data = require("./Data");

User.hasMany(Data);

Data.belongsTo(User);

module.exports={
    User,
    Data
};