const mongoose = require('mongoose');

const saveItemSchema = new mongoose.Schema({
    date: { type: Date, required: true },
    totalAmount: { type: Number, required: true },
    totalQuantity: { type: Number, required: true },
    items: [{
        optionType: String,
        optionName: String,
        amount: Number,
        quantity: Number
    }]
});

module.exports = mongoose.model('SaveItem', saveItemSchema);
