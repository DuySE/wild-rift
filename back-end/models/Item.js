const mongoose = require('mongoose');
const { Schema } = mongoose;

const itemSchema = new Schema({
    name: String,
    display_name: String,
    image_url: String,
    cost: Number,
    type: String
});

const Item = mongoose.model("Item", itemSchema, "items");
module.exports = Item;

