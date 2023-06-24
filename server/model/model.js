const mongoose = require('mongoose');

var recipeSchema = new mongoose.Schema({
    title : {
        type : String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
    },
    ingredients : {
        type : String,
        required: true
    },
    instructions: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: Image,
        required: true
    }
})

const recipedb = mongoose.model('recipedb', recipeSchema);

module.exports = recipedb;