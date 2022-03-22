const mongoose = require('mongoose');
const dbConfig = require("../config/dbconfig.js");

const connectDB = async() => {
    try {
        const conn = await mongoose.connect(dbConfig.url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,

        });
        console.log(`Mongo DB Connected: ${conn.connection.host}`);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}
module.exports = connectDB;