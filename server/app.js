require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const MONGODB_URI = process.env.MONGODB_URI
const PORT = process.env.PORT


const teacherRoute = require('./routes/teacherRoute')
const salaryRoute = require('./routes/salaryRoute')
const monthRoute = require('./routes/monthRoute')
const dailyCreaditRoute = require('./routes/dailyCreaditRoute')
const creaditOrDebitRoute = require('./routes/creditOrDebitRoutes')
const { configDotenv } = require('dotenv')


app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors({
    origin:'locallhost/5000',
    methods:'GET,POST,PUT,DELETE',
    allowedHeaders:'Content-Type,Authorization'
}))

app.get('/', (req,res)=>{
    res.status.send("Welcome to FHB")
})
app.use('/teacher', teacherRoute)
app.use('/salary', salaryRoute)
app.use('/month', monthRoute)
app.use('/dailycreadit', dailyCreaditRoute)
app.use('/creditordebit', creaditOrDebitRoute)


mongoose.connect(MONGODB_URI,{
    useNewUrlParser:true,
    useUnifiedTopology: true
})
const db=mongoose.connection;
db.on('error',console.error.bind(console, 'MongoDB connection error:'))

// =====================Unknown URL =========================
app.use((req, res, next) => {
    res.status(404).json({ massage: "Page Not Found" })
})
// =====================Unknown Server Error =========================
app.use((err, req, res, next) => {
    res.status(500).json(err.massage)
})

app.listen(PORT,()=>{
    console.log(`server is start at the port of ${PORT}`)
})
