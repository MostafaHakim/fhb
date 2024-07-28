const express = require('express')
const app = express()
const cors = require('cors')


const teacherRoute = require('./routes/teacherRoute')
const salaryRoute = require('./routes/salaryRoute')
const monthRoute = require('./routes/monthRoute')
const dailyCreaditRoute = require('./routes/dailyCreaditRoute')
const creaditOrDebitRoute = require('./routes/creditOrDebitRoutes')


app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.use('/teacher', teacherRoute)
app.use('/salary', salaryRoute)
app.use('/month', monthRoute)
app.use('/dailycreadit', dailyCreaditRoute)
app.use('/creditordebit', creaditOrDebitRoute)




// =====================Unknown URL =========================
app.use((req, res, next) => {
    res.status(404).json({ massage: "Page Not Found" })
})
// =====================Unknown Server Error =========================
app.use((err, req, res, next) => {
    res.status(500).json(err.massage)
})




module.exports = app;