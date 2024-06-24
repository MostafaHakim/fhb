const express = require('express');
const { getTeacher, createTeacher } = require('../controller/teacherInfoController');
const router = express.Router()

router.get('/', getTeacher)
router.post('/', createTeacher)





module.exports = router;