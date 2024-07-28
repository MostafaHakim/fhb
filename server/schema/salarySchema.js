const mongoose = require('mongoose')

const salarySchema = mongoose.Schema({
    mName: {
        required: true,
        type: String,
    },
    tId: {
        required: true,
        type: Number,
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
    tShift: {
        required: true,
        type: String,
    },
    tSalary: {
        required: true,
        type: Number,
    },
    tLate: {
        required: true,
        type: Number,
    },
    tAbsent: {
        required: true,
        type: String,
    },
    tInOutPanch: {
        required: true,
        type: String,
    },
    tDiduction: {
        required: true,
        type: String,
    },
    tPreviousDue: {
        required: true,
        type: Number,
    },
    tTotalAmount: {
        required: true,
        type: Number,
    },
    tPaidAmount: {
        required: true,
        type: Number,
    },
    tDueAfterPayment: {
        required: true,
        type: Number,
    },
})

module.exports = salarySchema;