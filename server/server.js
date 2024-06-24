require('dotenv').config()
const { default: mongoose, connect } = require('mongoose')
const app = require('./app')
const PORT = process.env.PORT || 5001
const MONGODB_URL = process.env.MONGODB_URL



//db connection
const connectDB = () => {
    try {
        mongoose.connect(MONGODB_URL)
        console.log('db connected')
    } catch (error) {
        console.log('something Broken')
    }
}

//server connection
app.listen(PORT, async () => {
    console.log(`server is running at the port of ${PORT}`)
    connectDB();
})




