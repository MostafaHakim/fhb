const express = require('express');
const { getSalary, createSalary } = require('../controller/salaryController');
const router = express.Router()

router.get('/', getSalary)
router.post('/', createSalary)





module.exports = router;