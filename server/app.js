require('dotenv').config()
const express = require('express');
const app = express();
const salaryRouter = require('./route/salaryRoute')
const teacherInfoRoute = require('./route/teacherInfoRoute')
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const MONGODB_URI = process.env.MONGODB_URI

// ===========cors======json========bodyparser=============
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
// ==================End=============

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const db = mongoose.connection;
db.on('error', (err) => { console.log('Mongoose connection error:', err) })

app.get('/', (req, res) => {
    res.status(202).send("Welcome")
})
//=================teacher info===========
app.use('/teacher', teacherInfoRoute)
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