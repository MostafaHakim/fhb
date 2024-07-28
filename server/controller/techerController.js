const Teacher = require('../model/teacherModel')


const getAllteacher = async (req, res) => {
    const getTeacher = await Teacher.find()
    res.status(200).json(getTeacher)
}
const createTeacher = async (req, res) => {
    const { tId,
        tShift,
        tName,
        tJoiningDate,
        tDesignation,
        tSalary } = req.body
    const newTeacher = new Teacher({
        tId,
        tShift,
        tName,
        tJoiningDate,
        tDesignation,
        tSalary
    })
    const teacherCreate = await newTeacher.save()
    res.json(teacherCreate)
}


const deleteTeacher = async (req, res) => {
    const { tId } = req.body;
    const delatedTeacher = await Teacher.deleteOne({ tId })
    res.status(201).send(delatedTeacher)
}
module.exports = { getAllteacher, createTeacher, deleteTeacher }