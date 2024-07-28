const express = require('express')
const { getAllOptions, createOption } = require('../controller/creditOrDebitController')

const router = express.Router()


router.get('/', getAllOptions)
router.post('/', createOption)

module.exports = router;