const { default: mongoose } = require("mongoose");
const dailyCreaditSchema = require("../schema/dailyCreaditSchema");

const dailyCreaditModel = mongoose.model('dailycreadit', dailyCreaditSchema);

module.exports = dailyCreaditModel;