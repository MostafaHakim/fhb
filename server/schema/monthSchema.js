const { default: mongoose } = require("mongoose");

const monthSchema = mongoose.Schema({
    mName: String,
})


module.exports = monthSchema;