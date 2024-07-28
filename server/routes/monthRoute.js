const express = require('express');
const { createMonth, getAllMonth } = require('../controller/monthController');
const router = express.Router()


router.get('/', getAllMonth)
router.post('/', createMonth)

module.exports = router;