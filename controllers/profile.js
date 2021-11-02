const express = require('express');
const router = express.Router();
const {User} = require('../models');


router.get("/profile",(req,res)=>{
    if(!req.session.user){
        return res.status(401).send("login first!")
    }else {
    res.render("profile", {
        user: req.session.user
    })
}
})


module.exports=router