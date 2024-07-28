const express = require('express');
const { getAllteacher, createTeacher, deleteTeacher } = require('../controller/techerController');
const router = express.Router()


router.get('/', getAllteacher)
router.post('/', createTeacher)
router.delete('/', deleteTeacher)
module.exports = router;