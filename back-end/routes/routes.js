const express = require("express");
const router = express.Router();
const Hero = require("../models/Hero");

router.get("/api/heroes/", async (req, res) => {
  try {
    const heroes = await Hero.find();
    res.json(heroes)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
});


router.get("/api/heroes/:name/", async (req, res) => {
  try {
    const hero = await Hero.findOne({'name': req.params.name});
    res.json(hero)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
});

module.exports = router;
