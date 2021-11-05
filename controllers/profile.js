const express = require('express');
const router = express.Router();
const {User,Data} = require('../models');


router.get("/profile",(req,res)=>{
    if(!req.session.user){
        return res.status(401).send("login first!")
    }else if(req.session.user.healthPro===true) {
        res.redirect("/prof/proLanding")
    }else {
        User.findByPk(req.session.user.id,{
            include:[Data]
            
        }).then(foundUser=>{
            const hbsUser = foundUser.get({plain:true})
            res.render("profile", {
                user: hbsUser
            })
        })
}
})


module.exports=router