const express = require('express');
const router = express.Router();
const {User, Data} = require('../models');


router.get("/",(req,res)=>{
    Data.findAll({
        include: [User],
        order: ['date']
    }).then(dbUsers=>{
        if(dbUsers.length){
            res.json(dbUsers)
        } else {
            res.status(404).json({message:"No users found!"})
        }
    }).catch(err=>{
        console.log(err);
        res.status(500).json({message:"an error occured",err:err})
    })
})

router.post("/",(req,res)=>{
    User.create({
        first_name:req.body.username,
        last_name:req.body.username,
        password:req.body.password,
        email:req.body.email
    }).then(newUser=>{
        res.json(newUser);
    }).catch(err=>{
        console.log(err);
        res.status(500).json({message:"an error occured",err:err})
    })
})

router.post("/login",(req,res)=>{
    User.findOne({
        where:{
            email:req.body.email
        }
    }).then(foundUser=>{
        if(!foundUser){
            res.status(401).json({message:"incorrect email or password"})
        } else {
            if(bcrypt.compareSync(req.body.password,foundUser.password)){
                req.session.user = {
                    username:foundUser.username,
                    email:foundUser.email,
                    id:foundUser.id
                }
                res.json(foundUser)
            } else {
                res.status(401).json({message:"incorrect email or password"})
            }
        }
    }).catch(err=>{
         console.log(err);
        res.status(500).json(err);
    })
})

router.delete("/:id",(req,res)=>{
    User.destroy({
        where:{
            id:req.params.id
        }
    }).then(delUser=>{
        res.json(delUser)
    })
})

module.exports = router;