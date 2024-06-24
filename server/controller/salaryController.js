const Salary = require('../model/salaryModel')

const getSalary = async (req, res) => {
    const getSalaryId = await Salary.find()
    res.status(200).json(getSalaryId)
    console.log(getSalaryId)
}

const createSalary = async (req, res) => {
    try {
        const { tId, tName, tSalary, tSalaryMonth, late, absent } = req.body;

        const calSalary = (num1, num2, num3) => {
            const netCalSalary = num1 - ((100 * num2) + (num1 / 30) * num3)
            return Math.ceil(netCalSalary)
        }
        const newSalary = new Salary({
            tId,
            tName,
            tSalary,
            tSalaryMonth,
            late,
            absent,
            netSalary: calSalary(tSalary, late, absent)
        })
        const createdSalary = await newSalary.save()
        console.log(createdSalary)
        res.status(200).json(createdSalary)
    } catch (error) {
        res.status(500).send(error)

    }

}



module.exports = { getSalary, createSalary }