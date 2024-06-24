const { default: mongoose } = require("mongoose");
const teacherInfoSchema = require('../schema/teacherInfoSchema')

const teacherInfoModel = mongoose.model('teacher', teacherInfoSchema)

module.exports = teacherInfoModel;