const mongoose = require('mongoose');

const saveItemSchema = new mongoose.Schema({
    date: { type: Date, required: true },
    totalAmount: Number,
    totalQuantity: Number,
    items: [{
        optionType: String,
        optionName: String,
        amount: Number,
        quantity: Number
    }]
});

module.exports = mongoose.model('SaveItem', saveItemSchema);
