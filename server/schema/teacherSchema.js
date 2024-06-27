const { default: mongoose } = require("mongoose");



const teacherSchema = mongoose.Schema({
    name: String
})


module.exports = teacherSchema;