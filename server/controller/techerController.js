const Teacher = require('../model/teacherModel')


const getAllteacher = async (req, res) => {
    try {
        const getTeacher = await Teacher.find()
        res.status(200).json(getTeacher)
    } catch (error) {
        res.status(200).json(error)
    }
}
const createTeacher = async (req, res) => {
    try {
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
        res.status(201).json(teacherCreate)
    } catch (error) {
        res.status(504).json(error)
    }
}


const deleteTeacher = async (req, res) => {
    const { tId } = req.body;
    const delatedTeacher = await Teacher.deleteOne({ tId })
    res.status(201).send(delatedTeacher)
}
module.exports = { getAllteacher, createTeacher, deleteTeacher }