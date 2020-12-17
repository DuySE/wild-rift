const express = require("express");
const router = express.Router();
const Hero = require("../models/Hero");

router.get("/heroes", async (req, res) => {
  try {
    const heroes = await Hero.find();
    res.json(heroes)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
});


router.get("/heroes/:name/", async (req, res) => {
  try {
    const hero = await Hero.findOne({'name': req.params.name});
    res.json(hero)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
});

module.exports = router;
