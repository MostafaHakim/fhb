const { default: mongoose } = require("mongoose");
const monthSchema = require("../schema/monthSchema");


const monthModel = mongoose.model('month', monthSchema)

module.exports = monthModel;