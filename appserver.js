const express = require('express');
const cors = require('cors');
const apirouting = require('./routes/api.routes.js');

const app = express();


var corsOptions = {
    origin: "http://localhost:8081"
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
app.use('/', apirouting);

const connectDB = require('./config/dbconnect');
connectDB();

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`);
})