import {getCoordsFromLocation, getImageForCity, getWeatherForCoords, postTrip} from "./apis";
import {isValidDate} from "./dateChecker";
import {getCodeForWeathericon} from "./helper";

function handleSubmit(event) {
    event.preventDefault();

    console.log('Save clicked...working...');

    // check what text was put into the form field
    const date = document.getElementById('date-input').value;
    const weatherInput = document.getElementById('weather');

    // validate date
    if(!isValidDate(date)) {
        alert('Please enter a valid date (DD.MM.YYYY).');
        return;
    }

    let city = document.getElementById('city-input').value;

    if(!city) {
        alert('Please enter a city name.');
        return;
    }

    // look for Coordinates, then for weather and then a picture
    getCoordsFromLocation(city)
    .then(res => {
        return getWeatherForCoords(res.lng, res.lat, date);
    })
    .then(res => {
        weatherInput.value = res.currently.summary;
        if (res.currently.icon) {
            const code = getCodeForWeathericon(res.currently.icon);
            console.log(`https://www.weatherbit.io/static/img/icons/${res.currently.icon}.png`);
            document.getElementById('weather-icon').src = `https://www.weatherbit.io/static/img/icons/${code}.png`;
        }
        return getImageForCity(city);
    })
    .then(res => {
       document.getElementById('city-image').src = res.webformatURL;
       postTrip(city, weatherInput.value, date);
    });

}

export { handleSubmit }
