const express = require("express");
const { getAllteacher, postTeacher } = require("../controller/teacherController");
const router = express.Router()

router.get('/', getAllteacher)
router.post('/', postTeacher)


module.exports = router;