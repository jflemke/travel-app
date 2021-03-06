import { isValidDate } from './js/dateChecker'
import { handleSubmit } from './js/formHandler'
import { getCoordsFromLocation, getImageForCity, getWeatherForCoords, postTrip } from './js/apis';
import { getCodeForWeathericon, getDateFromString } from "./js/helper";

import './styles/base.scss'
import './styles/base_desktop.scss'
import './styles/form.scss'
import './styles/footer.scss'
import './styles/header.scss'
import './styles/typography.scss'

document.getElementById('save-trip').addEventListener('click', handleSubmit);

export {
    isValidDate,
    getCodeForWeathericon,
    getCoordsFromLocation,
    getImageForCity,
    getWeatherForCoords,
    getDateFromString,
    handleSubmit,
    postTrip
}
