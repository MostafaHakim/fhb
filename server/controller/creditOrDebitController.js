const Option = require('../model/creditOrDebitModel')


const getAllOptions = async (req, res) => {
    try {
        const getOption = await Option.find()
        res.status(201).json(getOption)
    } catch (error) {
        res.status(404).json(error)
    }
}

const createOption = async (req, res) => {
    try {
        const { optionName, optionType } = req.body;
        const createNewOption = new Option({
            optionName,
            optionType,
        })
        const newItem = await createNewOption.save()
        res.status(201).json(newItem)
    } catch (error) {
        res.status(201).json(error)
    }
}

module.exports = { getAllOptions, createOption }