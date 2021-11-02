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
            selfharm_grade: 3,
            use_grade: 3,
            suicidal_thoughts_grade: 3,
            ovrl_emotion_grade: 3,
            self_accept_grade: 3,
            anger_grade: 3,
            joy_grade: 3,
            shame_grade: 3,
            sadness_grade: 3,
            fear_grade: 3,
            notes: '3',
            date: "2020-03-05",
            UserId: 1
        },
        {
            selfharm_grade: 2,
            use_grade: 3,
            suicidal_thoughts_grade: 4,
            ovrl_emotion_grade: 5,
            self_accept_grade: 2,
            anger_grade: 4,
            joy_grade: 4,
            shame_grade: 1,
            sadness_grade: 3,
            fear_grade: 3,
            notes: '1',
            date: "2020-03-05",
            UserId: 1
        },
        {
            selfharm_grade: 1,
            use_grade: 1,
            suicidal_thoughts_grade: 1,
            ovrl_emotion_grade: 1,
            self_accept_grade: 1,
            anger_grade: 1,
            joy_grade: 1,
            shame_grade: 1,
            sadness_grade: 1,
            fear_grade: 1,
            notes: 1,
            date: "2020-03-05",
            UserId: 1
        },
    ])
   
}

sequelize.sync({force:true}).then(()=>{
    seed();
})