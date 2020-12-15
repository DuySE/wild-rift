const express = require("express");
const router = express.Router();
const Hero = require("../models/Hero");

router.get("/heroes", async (req, res) => {
  try {
    const heroes = await Hero.find()
    res.json(heroes)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
});

module.exports = router;
