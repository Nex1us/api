require('dotenv').config({path: './config.env'})
const PORT = process.env.PORT

const express = require('express')
app = express()

const connectDB = require('./connect.js')

app.use(express.json())
const route = require('./route.js')

app.use('/',route)

connectDB()
app.listen(PORT, () => {
    console.log(`listening here: http://localhost:${PORT}`);
})