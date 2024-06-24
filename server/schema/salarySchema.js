const { default: mongoose } = require("mongoose");

const salarySchema = mongoose.Schema({
    tId: {
        type: Number,
        required: [true, 'Provide Teacher ID']
    },
    tName: {
        type: String,
        required: [true, 'Provide Teacher Name']
    },
    tSalary: {
        type: Number,
        required: [true, 'Provide Teacher Salary']
    },
    tSalaryMonth: {
        type: String,
        required: [true, 'Provide Teacher Salary Month']
    },
    late: {
        type: Number,
        required: [true, 'Provite Late Count']
    },
    absent: {
        type: Number,
        required: [true, 'Provite Absent Count']
    },
    netSalary: Number,
})

module.exports = salarySchema;