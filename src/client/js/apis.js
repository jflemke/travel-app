const DS_KEY = 'xxx';

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

async function getWeatherForCoords(lng, lat, date) {

}

export { getCoordsFromLocation }
