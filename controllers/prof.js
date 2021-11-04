const express = require("express");
const router = express.Router();
const { Professional, User, Data } = require("../models");
const bcrypt = require("bcrypt");
const session = require("express-session");

router.get("/lookup", (req, res) => {
  Professional.findAll()
    .then(ProfData => {
      res.json(ProfData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
});

router.get("/lookup/:id", (req, res) => {
  Professional.findByPk(req.params.id)
    .then(singleProf => {
      if (singleProf) {
        res.json(singleProf);
      } else {
        res.status(404).json({ err: "no such user Found!" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
});

router.post("/signup", (req, res) => {
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
      req.session.destroy(() => {
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
          id: foundProf.id,
          username: foundProf.username,
          email: foundProf.email
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
router.get('/alextest', (req, res) => {
  // req.session.destroy();
  req.session.user = {
    id: 1,
    first_name: "Denise",
    last_name: "Richards",
    title: "M.D.",
    institution: "Sound Mental Health",
    healthPro: true
  }
  res.json("success")
})
router.get("/patients", async (req, res) => {
  if (req.session.user.healthPro === true) {

    const foundPro = await Professional.findByPk(req.session.user.id, {
      include: [User]
    })
    const hbsPro = foundPro.get({ plain: true })
    for (const user of hbsPro.Users) {
      // console.log(user)

      const foundData = await Data.findAll({
        where: {

          UserId: user.id
        }

      }, {
        order: ["id", "DESC"]
      })
      const readData = foundData.map(data => data.get({ plain: true }))
      user.dbtData = readData
      console.log(user)

    }
    res.render('patients', {
      patients: hbsPro.Users
    })
  }


  else {
    res.status(401).json("You must be logged in as a healthcare professional to view this page")
  }
})
module.exports = router;