const mongoose = require('mongoose');
const { Schema } = mongoose;

const heroSchema = new Schema({
    name: String,
    profile_image: String
})

const Hero = mongoose.model("Hero", heroSchema, "heroes");
module.exports = Hero;
