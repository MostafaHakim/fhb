require('dotenv').config()
const { default: mongoose, connect } = require('mongoose')
const app = require('./app')
const PORT = process.env.PORT || 5001




//db connection
const connectDB = () => {
    try {
        mongoose.connect('mongodb+srv://vercel-admin-user:MTtgCgR04tq8h3Wy@fhb.3myln1i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
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




