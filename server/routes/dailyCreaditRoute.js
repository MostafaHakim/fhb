const express = require('express');
const { getAllDailyCreadit, createDailyCreaditItem } = require('../controller/dailyCreaditController');
const router = express.Router()


router.get('/', getAllDailyCreadit)
router.post('/', createDailyCreaditItem)

module.exports = router;