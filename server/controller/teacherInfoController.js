const Teacher = require('../model/teacherInfoModel')


//==================find teacher==============
const getTeacher = (req, res) => {
    const getTeacherInfo = Teacher.find()
    res.status(200).send(getTeacherInfo)
    console.log(getTeacherInfo)
}


//==================create teacher==============
const createTeacher = (req, res) => {
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
    const insertTeacher = newTeacher.save()
    res.status(200).send(insertTeacher)
    console.log(insertTeacher)
}

module.exports = {
    getTeacher,
    createTeacher
}