const express = require("express");
const router = express.Router();
const { Professional } = require("../models");
const bcrypt = require("bcrypt");

router.get("/", (req, res) => {
    Professional.findAll()
      .then(ProfData => {
        res.json(ProfData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ err });
      });
  });

  router.get("/:id", (req, res) => {
    Professional.findByPk(req.params.id)
      .then(singleProf => {
        if (singleProf) {
          res.json(singleProf);
        } else {
          res.status(404).json({ err: "no such user found!" });
        }
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ err });
      });
  });

  router.post("/profsignup", (req, res) => {
    Professional.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        password: req.body.password,
        email: req.body.email,
       title: req.body.title,
       institution: req.body.institution 
    })
      .then(newProf => {
        req.session.user = {
            first_name: newUser.first_name,
            last_name: newUser.last_name,
            email: newUser.email,
            id: newUser.id,
            title: newTitle.title,
            institution: newInstituiton.institution,
            logged_in: true
        };
        res.json(newProf);
      })
      .catch(err => {
        console.log(err);
        req.session.destroy(()=>{
          res.status(500).json({ err });
        })
      });
  });

  router.post("/login", (req, res) => {
    Professional.findOne({
      where: {
        email: req.body.email
      }
    })
      .then(foundProf => {
        if (!foundProf) {
          return req.session.destroy(() => {
            return res.status(401).json({ err: "invalid email/password" });
          });
        }
        if (!req.body.password) {
          return req.session.destroy(() => {
            return res.status(401).json({ err: "invalid email/password" });
          });
        }
        if (bcrypt.compareSync(req.body.password, foundProf.password)) {
          req.session.user = {
            first_name: foundUser.first_name,
            last_name: foundUser.last_name,
            email: foundUser.email,
            id: foundUser.id,
            logged_in: true,
            institution: foundUser.Professional.institution
          };
          return res.json({
            id:foundProf.id,
            email:foundProf.email
          });
        } else {
          return req.session.destroy(() => {
            return res.status(401).json({ err: "invalid email/password" });
          });
        }
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ err });
      });
  });
  

  module.exports = router;