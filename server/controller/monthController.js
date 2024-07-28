const Month = require('../model/monthModel')


const getAllMonth = async (req, res) => {
    try {
        const getMonth = await Month.find()
        res.status(200).json(getMonth)
    } catch (error) {
        res.status(500).json(error)
    }
}
const createMonth = async (req, res) => {
    try {
        const { mName } = req.body
        const newMonth = new Month({
            mName
        })
        const monthCreated = await newMonth.save()
        res.status(200).json(monthCreated)
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = { getAllMonth, createMonth }