
const { default: mongoose } = require("mongoose");

const creditOrDebitOptionSchema = require('../schema/creditOrDebitOptionSchema')


const creditOrDebitModel = mongoose.model('creditordebit', creditOrDebitOptionSchema)

module.exports = creditOrDebitModel;