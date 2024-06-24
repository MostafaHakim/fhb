const mongoose = require('mongoose')


const teacherInfoSchema = mongoose.Schema({
    tId: {
        type: Number,
        required: true
    },
    tName: {
        type: String,
        required: true
    },
    tDesignation: {
        type: String,
        required: true
    },
    tSalary: {
        type: Number,
        required: true
    }
})


module.exports = teacherInfoSchema;