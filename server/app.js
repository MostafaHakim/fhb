const express = require('express')
const app = express()
const MONGODB_URI = process.env.MONGODB_URI;
const cors = require('cors')


const teacherRouter = require('./route/teacherRouter');
const { default: mongoose } = require('mongoose');

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())


mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;
db.on('error', (err) => {
    console.log('Mongoose connection error:', err)
})


app.use('/api/teacher',)



app.use((req, res, next) => {
    res.send("Not Found")

})
app.use((err, req, res, next) => {
    res.status(500).send("Something Wrong")

})

module.exports = app;