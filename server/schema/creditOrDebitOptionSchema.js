const { default: mongoose } = require("mongoose");


const creditOrDebitOptionSchema = mongoose.Schema({
    optionName: String,
    optionType: String
})
module.exports = creditOrDebitOptionSchema;