import {getCoordsFromLocation} from "./apis";
import {isValidDate} from "./dateChecker";

function handleSubmit(event) {
    event.preventDefault();

    console.log('Save clicked...working...');

    // check what text was put into the form field
    let date = document.getElementById('date-input').value;

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
        console.log(`City: ${res.name}, Long: ${res.lng}, Lat: ${res.lat}`);
    });

}

export { handleSubmit }
