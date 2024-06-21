require('dotenv').config({path: 'config.env'})

const mongoose = require('mongoose')

async function connectDB() {
    try {
        const database = await  mongoose.connect(process.env.MONGO_DATABASE);
        console.log(`connected to : ${database.connection.host}`);
        console.log(`connected to DB: ${database.connection.db.databaseName}`);
        } catch (error) {
        console.log(error);
    }
}

module.exports = connectDB
