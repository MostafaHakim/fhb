const { default: mongoose } = require("mongoose");

const teacherSchema = mongoose.Schema({
    tId: {
        required: true,
        type: Number,
    },
    tShift: {
        required: true,
        type: String,
    },
    tName: {
        required: true,
        type: String,
    },
    tJoiningDate: {
        required: true,
        type: String,
    },
    tDesignation: {
        required: true,
        type: String,
    },
    tSalary: {
        required: true,
        type: Number,
    },
})

module.exports = teacherSchema;