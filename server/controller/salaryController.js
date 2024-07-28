const Salary = require('../model/salaryModel')
const getAllSalary = async (req, res) => {
    try {
        const getSalary = await Salary.find().sort({ tId: 1 })
        res.status(200).json(getSalary)
    } catch (error) {
        res.status(500).json(error)
    }

}


const createSalary = async (req, res) => {
    try {
        const {
            mName,
            tId,
            tName,
            tJoiningDate,
            tDesignation,
            tShift,
            tSalary,
            tLate,
            tAbsent,
            tInOutPanch,
            tDiduction,
            tPreviousDue,
            tTotalAmount,
            tPaidAmount,
            tDueAfterPayment
        } = req.body;
        const newSalary = new Salary({
            mName,
            tId,
            tName,
            tJoiningDate,
            tDesignation,
            tShift,
            tSalary,
            tLate,
            tAbsent,
            tInOutPanch,
            tDiduction,
            tPreviousDue,
            tTotalAmount,
            tPaidAmount,
            tDueAfterPayment
        })
        const saveSalary = await newSalary.save()
        res.status(200).json(saveSalary)
    } catch (error) {
        res.status(500).json(error)
    }


}


const updataSalary = async (req, res) => {
    try {
        const { tPaidAmount, id, tDueAfterPayment } = req.body;
        const updatedSalary = await Salary.updateOne({ _id: id }, {
            $set:
            {
                tPaidAmount,
                tDueAfterPayment,
            }
        })
        if (updatedSalary) {
            return res.status(201).send(updatedSalary)
        }
        else {
            return res.status(404).send("Not Found")
        }
    } catch (error) {
        res.status(500).send(error)
    }
}


const deleteSalary = async (req, res) => {
    try {
        const { tId } = req.body;
        const deletedSalary = await Salary.deleteMany({ tId })
        res.status(201).send(deletedSalary)
    } catch (error) {
        res.status(404).send("Not Found")
    }
}
module.exports = { getAllSalary, createSalary, updataSalary, deleteSalary }

