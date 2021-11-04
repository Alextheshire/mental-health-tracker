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

  router.post("/login", (req, res) => {
    Professional.create({
      email: req.body.email,
      username: req.body.username,
      password: req.body.password
    })
      .then(newProf => {
        req.session.user = {
          id: newUser.id,
          email: newUser.email,
          username: newUser.username
        };
        res.json(newUser);
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
            id: foundProf.id,
            email: foundProf.email,
            username: foundProf.username
          };
          return res.json({
            id:foundProf.id,
            username:foundProf.username,
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