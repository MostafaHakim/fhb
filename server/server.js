require('dotenv').config()
const { default: mongoose, connect } = require('mongoose')
const app = require('./app')
const PORT = process.env.PORT || 5001




//db connection
const connectDB = () => {
    try {
        mongoose.connect('mongodb+srv://fhbash:fhb134042@fhb.3myln1i.mongodb.net/fhb?retryWrites=true&w=majority&appName=fhb')
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




