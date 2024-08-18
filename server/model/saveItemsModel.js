const mongoose = require('mongoose');

const saveItemSchema = new mongoose.Schema({
    date: { type: Date, required: true },
    items: [{
        name: String,
        amount: Number,
        quantity: Number
    }]
});

module.exports = mongoose.model('SaveItem', saveItemSchema);
