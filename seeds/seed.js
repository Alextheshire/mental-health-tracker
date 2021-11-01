const sequelize = require("../config/connection");
const {User,Data} = require("../models")

const seed = async ()=>{
    const userData = await User.bulkCreate([
        {
          
            password:"password",
            email:"joe@joe.joe",
            first_name: "Joe",
            last_name: "Rehfuss"
        },
        {

            password:"password",
            email:"louis@joe.joe",
            first_name: "Louis",
            last_name: "Coleman"
        },
        {

            password:"password",
            email:"brett@joe.joe",
            first_name: "Brett",
            last_name: "Belka"
        },
        {

            password:"password",
            email:"alex@joe.joe",
            first_name: "Alex",
            last_name: "Beres"
        },
    ],{
        individualHooks:true
    })
    const dataData = await Data.bulkCreate([
        {
            date: "2020-03-05",
            UserId: 1
        },
        {
            date: "2020-03-05",
            UserId: 1
        },
        {
            date: "2020-03-05",
            UserId: 1
        },
    ])
   
}

sequelize.sync({force:true}).then(()=>{
    seed();
})