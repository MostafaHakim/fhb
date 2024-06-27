const Teacher = require('../model/teacherModel')

const getAllteacher = async (req, res) => {
    try {
        const getTeacher = await Teacher.find()
        res.status(201).json(getTeacher)
    } catch (error) {
        res.status(500).json({ message: "something wrong", error })
    }

}
const postTeacher = async (req, res) => {
    try {
        const { name } = req.body
        const createTeacher = new Teacher({
            name
        })
        const newTeacher = await createTeacher.save()
        res.status(201).json(newTeacher)
    } catch (error) {
        res.status(500).json({ message: "something wrong", error })
    }

}

module.exports = { getAllteacher, postTeacher }