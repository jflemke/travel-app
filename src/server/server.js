const dotenv = require('dotenv');
dotenv.config();

const path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');
const request = require('request');

// set API credentials
const DS_KEY = process.env.DS_API_KEY;
const PB_KEY = process.env.PB_API_KEY;

const trip = {};

const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

app.use(express.static('dist'));

console.log(__dirname);

app.get('/', function (req, res) {
    res.sendFile('dist/index.html');
});

// designates what port the app will listen to for incoming requests
const port = 8085;
app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});

app.get('/test', function (req, res) {
    res.send(mockAPIResponse);
});

app.post('/trip', function (req, res) {
    const reqJSON = req.body;

    trip.city = reqJSON.city;
    trip.date = reqJSON.date;
    trip.forecast = reqJSON.forecast;
});

// Getting back weather data from
app.get('/weather', function (req, res) {
    const lat = req.query.lat;
    const lng = req.query.lng;
    const date = req.query.date;

    const url = `https://api.darksky.net/forecast/${DS_KEY}/${lat},${lng},${date}`;

    request(url, {json: true}, (err, res2, body) => {
        if (err) {
            res.status(500).send('Something went wrong');
            return console.log(err);
        }
        res.send(body);
    })
});

// Getting a image url for a city
app.get('/image/:city', function (req, res) {
    const city = encodeURI(req.params.city);
    const url = `https://pixabay.com/api/?key=${PB_KEY}&q=${city}&image_type=photo`;

    request(url, {json: true}, (err, res2, body) => {
        if (err) {
            res.status(500).send('Something went wrong');
            return console.log(err);
        }
        res.send(body.hits[0]);
    });

});
