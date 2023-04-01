const express = require('express');
const cors = require('cors');
const path = require('path');
const { errorMiddleware } = require('./middleware/error.middleware');

const app = express();


app.use(cors());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
    next();
});


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/logement', require('./routes/logement.route'));
app.use(errorMiddleware);
module.exports = app;
