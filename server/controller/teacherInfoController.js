const Teacher = require('../model/teacherInfoModel')


//==================find teacher==============
const getTeacher = async (req, res) => {
    const getTeacherInfo = await Teacher.find()
    res.status(200).json(getTeacherInfo)
    console.log(getTeacherInfo)
}


//==================create teacher==============
const createTeacher = async (req, res) => {
    const {
        tId,
        tName,
        tDesignation,
        tSalary
    } = req.body;
    const newTeacher = new Teacher({
        tId,
        tName,
        tDesignation,
        tSalary
    })
    const insertTeacher = await newTeacher.save()
    res.status(200).json(insertTeacher)
    console.log(insertTeacher)
}

module.exports = {
    getTeacher,
    createTeacher
}