const express = require('express');
const router = express.Router();
const { User, Data } = require('../models');
const bcrypt = require("bcrypt");


router.get("/", (req, res) => {
    console.log('hello')
    res.render("home")
})
router.get("/ask", (req, res) => {
    console.log('hello')
    res.render("ask")
})
router.get("/login", (req, res) => {
    console.log('hello')
    res.render("login")
})
router.get("/profile", (req, res) => {
    console.log('hello')
    res.render("profile", {
        user: req.session.user
    })
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
        }
    }).then(foundUser => {
        if (!foundUser) {
            res.status(401).json({ message: "incorrect email or password" })
        } else {
            if (bcrypt.compareSync(req.body.password, foundUser.password)) {
                req.session.user = {
                    first_name: foundUser.first_name,
                    last_name: foundUser.last_name,
                    email: foundUser.email,
                    id: foundUser.id,
                    logged_in: true
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
    res.redirect("login")
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
        UserId:req.session.user.id
    }).then(newForm=>{
        res.redirect("profile")
    }).catch(err=>{
        console.log(err)
        res.json(err)
    })
})

module.exports = router;