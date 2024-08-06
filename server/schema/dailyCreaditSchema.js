const { default: mongoose } = require("mongoose");
const dailyCreaditSchema = mongoose.Schema({
    cPurpose: String,
    cAmount: Number,
    cType:String,
    cQty: Number,
    cDate: String,
})
module.exports = dailyCreaditSchema;