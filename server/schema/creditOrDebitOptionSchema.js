const { default: mongoose } = require("mongoose");


const creditOrDebitOptionSchema = mongoose.Schema({
    option: [
        {
            name: String,
            qty: Number,
            amount: Number
        }
    ]
})
module.exports = creditOrDebitOptionSchema;