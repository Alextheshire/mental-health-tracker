const sequelize = require("../config/connection");
const {User,Data,Professional} = require("../models")

const seed = async ()=>{
    const proData = await Professional.bulkCreate([
        {
          
            password:"password",
            email:"denise@therapist.com",
            first_name: "Denise",
            last_name: "Richards",
            title: "M.D.",
            institution: "Sound Mental Health"
        },
        {
            password:"password",
            email:"greg@therapist.com",
            first_name: "Greg",
            last_name: "Davis",
            title: "Ph.D.",
            institution: "Sound Mental Health"

            
        }
    ],{
        individualHooks:true
    })
    
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
            last_name: "Coleman",
            ProfessionalId:1
        },
        {

            password:"password",
            email:"brett@joe.joe",
            first_name: "Brett",
            last_name: "Belka",
            ProfessionalId:1
        },
        {

            password:"password",
            email:"alex@joe.joe",
            first_name: "Alex",
            last_name: "Beres",
            ProfessionalId:1
        },
    ],{
        individualHooks:true
    })

   const generateChoice = () => {
    x = Math.floor((Math.random()) * 6);
    return x
   }
    const dataData = await Data.bulkCreate([
        {
            selfharm_grade: generateChoice(),
            use_grade: generateChoice(),
            suicidal_thoughts_grade: generateChoice(),
            ovrl_emotion_grade: generateChoice(),
            self_accept_grade: generateChoice(),
            anger_grade: generateChoice(),
            joy_grade: generateChoice(),
            shame_grade: generateChoice(),
            sadness_grade: generateChoice(),
            fear_grade: generateChoice(),
            notes: '3',
            date: "2020-03-06",
            UserId: 1
        },
        {
            selfharm_grade: generateChoice(),
            use_grade: generateChoice(),
            suicidal_thoughts_grade: generateChoice(),
            ovrl_emotion_grade: generateChoice(),
            self_accept_grade: generateChoice(),
            anger_grade: generateChoice(),
            joy_grade: generateChoice(),
            shame_grade: generateChoice(),
            sadness_grade: generateChoice(),
            fear_grade: generateChoice(),
            notes: '1',
            date: "2020-04-05",
            UserId: 1
        },
        {
            selfharm_grade: generateChoice(),
            use_grade: generateChoice(),
            suicidal_thoughts_grade: generateChoice(),
            ovrl_emotion_grade: generateChoice(),
            self_accept_grade: generateChoice(),
            anger_grade: generateChoice(),
            joy_grade: generateChoice(),
            shame_grade: generateChoice(),
            sadness_grade: generateChoice(),
            fear_grade: generateChoice(),
            notes: 1,
            date: "2020-03-05",
            UserId: 1
        },
        {
            selfharm_grade: generateChoice(),
            use_grade: generateChoice(),
            suicidal_thoughts_grade: generateChoice(),
            ovrl_emotion_grade: generateChoice(),
            self_accept_grade: generateChoice(),
            anger_grade: generateChoice(),
            joy_grade: generateChoice(),
            shame_grade: generateChoice(),
            sadness_grade: generateChoice(),
            fear_grade: generateChoice(),
            notes: 1,
            date: "2020-03-05",
            UserId: 1
        },
        {
            selfharm_grade: generateChoice(),
            use_grade: generateChoice(),
            suicidal_thoughts_grade: generateChoice(),
            ovrl_emotion_grade: generateChoice(),
            self_accept_grade: generateChoice(),
            anger_grade: generateChoice(),
            joy_grade: generateChoice(),
            shame_grade: generateChoice(),
            sadness_grade: generateChoice(),
            fear_grade: generateChoice(),
            notes: 1,
            date: "2020-03-05",
            UserId: 1
        },
        {
            selfharm_grade: generateChoice(),
            use_grade: generateChoice(),
            suicidal_thoughts_grade: generateChoice(),
            ovrl_emotion_grade: generateChoice(),
            self_accept_grade: generateChoice(),
            anger_grade: generateChoice(),
            joy_grade: generateChoice(),
            shame_grade: generateChoice(),
            sadness_grade: generateChoice(),
            fear_grade: generateChoice(),
            notes: 1,
            date: "2020-03-05",
            UserId: 1
        },
        {
            selfharm_grade: generateChoice(),
            use_grade: generateChoice(),
            suicidal_thoughts_grade: generateChoice(),
            ovrl_emotion_grade: generateChoice(),
            self_accept_grade: generateChoice(),
            anger_grade: generateChoice(),
            joy_grade: generateChoice(),
            shame_grade: generateChoice(),
            sadness_grade: generateChoice(),
            fear_grade: generateChoice(),
            notes: 1,
            date: "2020-03-05",
            UserId: 1
        },
        {
            selfharm_grade: generateChoice(),
            use_grade: generateChoice(),
            suicidal_thoughts_grade: generateChoice(),
            ovrl_emotion_grade: generateChoice(),
            self_accept_grade: generateChoice(),
            anger_grade: generateChoice(),
            joy_grade: generateChoice(),
            shame_grade: generateChoice(),
            sadness_grade: generateChoice(),
            fear_grade: generateChoice(),
            notes: 1,
            date: "2020-03-05",
            UserId: 1
        },
        {
            selfharm_grade: generateChoice(),
            use_grade: generateChoice(),
            suicidal_thoughts_grade: generateChoice(),
            ovrl_emotion_grade: generateChoice(),
            self_accept_grade: generateChoice(),
            anger_grade: generateChoice(),
            joy_grade: generateChoice(),
            shame_grade: generateChoice(),
            sadness_grade: generateChoice(),
            fear_grade: generateChoice(),
            notes: 1,
            date: "2020-03-05",
            UserId: 1
        },
        {
            selfharm_grade: generateChoice(),
            use_grade: generateChoice(),
            suicidal_thoughts_grade: generateChoice(),
            ovrl_emotion_grade: generateChoice(),
            self_accept_grade: generateChoice(),
            anger_grade: generateChoice(),
            joy_grade: generateChoice(),
            shame_grade: generateChoice(),
            sadness_grade: generateChoice(),
            fear_grade: generateChoice(),
            notes: 1,
            date: "2020-03-05",
            UserId: 1
        },
        {
            selfharm_grade: generateChoice(),
            use_grade: generateChoice(),
            suicidal_thoughts_grade: generateChoice(),
            ovrl_emotion_grade: generateChoice(),
            self_accept_grade: generateChoice(),
            anger_grade: generateChoice(),
            joy_grade: generateChoice(),
            shame_grade: generateChoice(),
            sadness_grade: generateChoice(),
            fear_grade: generateChoice(),
            notes: 1,
            date: "2020-03-05",
            UserId: 1
        },
        {
            selfharm_grade: generateChoice(),
            use_grade: generateChoice(),
            suicidal_thoughts_grade: generateChoice(),
            ovrl_emotion_grade: generateChoice(),
            self_accept_grade: generateChoice(),
            anger_grade: generateChoice(),
            joy_grade: generateChoice(),
            shame_grade: generateChoice(),
            sadness_grade: generateChoice(),
            fear_grade: generateChoice(),
            notes: 1,
            date: "2020-03-05",
            UserId: 1
        },
        {
            selfharm_grade: generateChoice(),
            use_grade: generateChoice(),
            suicidal_thoughts_grade: generateChoice(),
            ovrl_emotion_grade: generateChoice(),
            self_accept_grade: generateChoice(),
            anger_grade: generateChoice(),
            joy_grade: generateChoice(),
            shame_grade: generateChoice(),
            sadness_grade: generateChoice(),
            fear_grade: generateChoice(),
            notes: 1,
            date: "2020-03-05",
            UserId: 1
        },
    ])
   
}

sequelize.sync({force:true}).then(()=>{
    seed();
})