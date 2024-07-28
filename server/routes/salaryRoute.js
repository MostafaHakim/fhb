const express = require('express');
const { getAllSalary, createSalary, updataSalary, deleteSalary } = require('../controller/salaryController');
const router = express.Router()


router.get('/', getAllSalary)
router.post('/', createSalary)
router.put('/', updataSalary)
router.delete('/', deleteSalary)

module.exports = router;