import { isValidDate } from './js/dateChecker'
import { handleSubmit } from './js/formHandler'
import { getCoordsFromLocation, getImageForCity, getWeatherForCoords } from './js/apis';
import { getDateFromString } from "./js/helper";

import './styles/base.scss'
import './styles/base_desktop.scss'
import './styles/form.scss'
import './styles/footer.scss'
import './styles/header.scss'

export {
    isValidDate,
    getCoordsFromLocation,
    getImageForCity,
    getWeatherForCoords,
    getDateFromString,
    handleSubmit
}
