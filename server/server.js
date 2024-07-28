require('dotenv').config()
const { default: mongoose } = require('mongoose')
const app = require('./app')
const PORT = process.env.PORT || 4001
const MONGODB_URI = process.env.MONGODB_URI


const connectDB = async () => {
    await mongoose.connect(MONGODB_URI)
    console.log('db Connected')
}
app.listen(PORT, async () => {
    console.log(`Server is running at the port of ${PORT}`)
    await connectDB()
})
