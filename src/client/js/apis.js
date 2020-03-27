import {getDateFromString} from "./helper";

async function getCoordsFromLocation(inputText) {

    const cityEncoded = encodeURI(inputText);
    // get only one entry back
    const url = `http://api.geonames.org/searchJSON?q=${cityEncoded}&maxRows=1&&username=Cr0wns`;

    const response = await fetch(url);
    try {
        const responseData = await response.json();
        return responseData.geonames[0];
    } catch(error) {
        console.error(error);
    }


}

async function getWeatherForCoords(lng, lat, dateStr) {
    const date = getDateFromString(dateStr);

    const dateISO = date.toISOString().split('.')[0]+"Z";
    const url = `http://localhost:8085/weather?lat=${lat}&lng=${lng}&date=${dateISO}`;
    console.log(url);
    const response = await fetch(url);
    try {
        return await response.json();
    } catch(error) {
        console.error(error);
    }
}

async function getImageForCity(city) {
    const url = `http://localhost:8085/image/${city}`;
    console.log(url);
    const response = await fetch(url);
    try {
        return await response.json();
    } catch(error) {
        console.error(error);
    }
}

async function postTrip(city, forecast, dateStr) {
    const date = getDateFromString(dateStr);
    const url = `http://localhost:8085/trip`;

    await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({city: city, forecast: forecast, date: date})
    });
}

export { getCoordsFromLocation, getImageForCity, getWeatherForCoords, postTrip }
