const DailyCreadit = require('../model/dailyCreaditModel')



const getAllDailyCreadit = async (req, res) => {
    try {
        const getDailyCreadit = await DailyCreadit.find()
        res.status(201).json(getDailyCreadit)
    } catch (error) {
        res.status(404).json(error)
    }
}

const createDailyCreaditItem = async (req, res) => {
    try {
        const {
            cPurpose,
            cType,
            cAmount,
            cQty } = req.body;
        const createItem = new DailyCreadit({
            cPurpose,
            cType,
            cAmount,
            cQty,
            cDate:Date.now()
        })
        const newItem = await createItem.save()
        res.status(200).json(newItem)
    } catch (error) {
        res.status(404).json(error)
    }
}

module.exports = { getAllDailyCreadit, createDailyCreaditItem }