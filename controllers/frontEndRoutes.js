const express = require('express');
const router = express.Router();
const { User, Data, Professional } = require('../models');
const bcrypt = require("bcrypt");


router.get("/", (req, res) => {
    if (!req.session.user){
    res.render("home", {
        user: req.session.user
    })
    } else {
    res.redirect('profile')
    }
})
router.get("/ask", (req, res) => {
    if (req.session.user) {
        res.render("ask", {
            user: req.session.user
        })

    } else {
        res.redirect("login")
    }
})
router.get("/login", (req, res) => {
    if (req.session.user){
        res.redirect("profile")
    } else {
    res.render("login", {
        user: req.session.user
    })
    }
})

<<<<<<< HEAD
router.get("/lookup/:email",(req,res)=>{
    User.findOne({
        where:{
           email: req.params.email
        }
    }).then(foundUser=>{
        res.json(foundUser)
    }).catch(err=>{
        console.log(err)
        res.json({err:err})
=======
router.get("/proflogin", (req, res) => {
    res.render("profLogin", {
        user: req.session.user
>>>>>>> dev
    })
})



router.get("/analytics", (req, res) => {
    if (req.session.user) {
        res.render('chart', {
            user: req.session.user
        })
    } else {
        res.render('login')
    }
})
router.get("/api/chart", (req, res) => {
    if (req.session.user) {
        Data.findAll({
            where: {
                Userid: req.session.user.id
            },
            order: [['date', 'DESC']]
        }).then(foundData => {
            res.json(foundData)
        })
    } else {
        res.render('login')
    }
})
// Data.findAll({
//     include: [User],
//     order: ['date']
// }).then(dbUsers=>
// const hbsData = petData.map(data=>data.get({plain:true}))

router.post("/signup", (req, res) => {
    User.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        password: req.body.password,
        email: req.body.email
    }).then(newUser => {
        req.session.user = {
            first_name: newUser.first_name,
            last_name: newUser.last_name,
            email: newUser.email,
            id: newUser.id,
            logged_in: true
        }
        res.render("profile", {
            user: req.session.user
        });
    }).catch(err => {
        console.log(err);
        res.status(500).json({ message: "an error occured", err: err })
    })
})

router.post("/login", (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        },
        include: [Professional]
    }).then(foundUser => {
        if (!foundUser) {
            res.status(401).json({ message: "incorrect email or password" })
        } else {
            if (bcrypt.compareSync(req.body.password, foundUser.password)) {
                var provider= "None"
                var institution = "None"
                if (foundUser.Professional) {

                    provider = foundUser.Professional.first_name + " " + foundUser.Professional.last_name + ", " + foundUser.Professional.title
                    institution=foundUser.Professional.institution
                }
                req.session.user = {
                    first_name: foundUser.first_name,
                    last_name: foundUser.last_name,
                    email: foundUser.email,
                    id: foundUser.id,
                    logged_in: true,
                    provider: provider,
                    institution: institution
                }
                res.render("profile", {
                    user: req.session.user
                })
            } else {
                res.status(401).json({ message: "incorrect email or password" })
            }
        }
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})
router.get("/logout", (req, res) => {
    req.session.destroy();
    res.redirect("/")
})

router.delete("/:id", (req, res) => {
    User.destroy({
        where: {
            id: req.params.id
        }
    }).then(delUser => {
        res.json(delUser)
    })
})

router.post("/newForm", (req, res) => {
    Data.create({
        date: req.body.date,
        selfharm_grade: req.body.selfharm_grade,
        use_grade: req.body.use_grade,
        suicidal_thoughts_grade: req.body.suicidal_thoughts_grade,
        ovrl_emotion_grade: req.body.ovrl_emotion_grade,
        self_accept_grade: req.body.self_accept_grade,
        anger_grade: req.body.anger_grade,
        joy_grade: req.body.joy_grade,
        shame_grade: req.body.shame_grade,
        sadness_grade: req.body.sadness_grade,
        fear_grade: req.body.fear_grade,
        notes: req.body.notes,
        UserId: req.session.user.id
    }).then(newForm => {
        const hbsData = newForm.get({ plain: true })
        res.json({
            data: hbsData,
            user: req.session.user
        })
    }).catch(err => {
        console.log(err)
        res.json(err)
    })
})

router.get("/form", (req, res) => {
    if (req.session.user) {
        Data.findOne({
            where: {
                UserId: req.session.user.id,
            },
            order: [["id", 'DESC']]
        }).then(formData => {
            if (formData == null) {
                res.redirect("profile")
            } else {
                const hbsData = formData.get({ plain: true })
                res.render("form", {
                    data: hbsData,
                    user: req.session.user
                })
            }
        })
    } else {
        res.redirect("login")
    }
})

router.get("/form/:id", (req, res) => {
    Data.findByPk(req.params.id).then(foundForm => {
        const hbsForm = foundForm.get({ plain: true })
        res.render("form", {
            data: hbsForm,
            user: req.session.user
        })
    })
})

router.get("/form/:id", (req, res) => {
    Data.findByPk(req.params.id).then(foundForm => {
        const hbsForm = foundForm.get({ plain: true })
        res.render("form", {
            data: hbsForm,
            user: req.session.user
        })
    })
})
router.get("/resources", (req, res) => {
    res.render("resources", {
        user: req.session.user
    })
})



module.exports = router;