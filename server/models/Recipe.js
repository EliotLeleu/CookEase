const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    title: String,
    description: String,
    ingredients: [String],
    instructions: String,
    calories: Number,
    allergens: [String],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Recipe', recipeSchema);
