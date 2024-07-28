const { default: mongoose } = require("mongoose");
const salarySchema = require("../schema/salarySchema");

const salaryModel = mongoose.model('salary', salarySchema)

module.exports = salaryModel;