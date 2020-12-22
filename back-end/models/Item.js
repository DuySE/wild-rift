const mongoose = require('mongoose');
const { Schema } = mongoose;

const itemSchema = new Schema({
    name: String,
    profile_image: String
});

const Item = mongoose.model("Item", itemSchema, "items");
module.exports = Item;

