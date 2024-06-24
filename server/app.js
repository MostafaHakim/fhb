const express = require('express');
const app = express();
const salaryRouter = require('./route/salaryRoute')
const teacherInfoRoute = require('./route/teacherInfoRoute')
const cors = require('cors')




app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.get('/', (req, res) => {
    res.status(202).send("Welcome")
})
//=================teacher info===========
app.use('/teacher', (req, res) => {
    res.send("teacher")
})
//===========Salary Route============
app.use('/salary', salaryRouter)






//=============invlid URL=============
app.use((req, res, next) => {
    res.status(404).send("Not Found");
    next();
})

//===============server Error===========
app.use((err, req, res, next) => {
    res.status(500).json({ err: massage })
})


module.exports = app;