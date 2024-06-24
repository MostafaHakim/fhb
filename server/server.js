require('dotenv').config()
const { default: mongoose, connect } = require('mongoose')
const app = require('./app')
const PORT = process.env.PORT || 5001



//db connection
const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/fhb')
        console.log('db connected')
    } catch (error) {
        console.log('something Broken')
    }
}

//server connection
app.listen(PORT, async () => {
    console.log(`server is running at the port of ${PORT}`)
    await connectDB();
})




