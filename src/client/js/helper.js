function getDayFromDateStr(dateStr) {
    return dateStr.split('.')[0];
}

function getMonthFromDateStr(dateStr) {
    return dateStr.split('.')[1];
}

function getYearFromDateStr(dateStr) {
    return dateStr.split('.')[2];
}

function getDateFromString(dateStr) {
    const year = getYearFromDateStr(dateStr);
    const month = getMonthFromDateStr(dateStr);
    const day = getDayFromDateStr(dateStr);
    return new Date(year, month - 1, day);
}

function getCodeForWeathericon(iconStr) {
    switch (iconStr) {
        case 'clear-day':
            return 'c01d';
        case 'clear-night':
            return 'c01n';
        case 'cloudy':
            return 'c04d';
        case 'fog':
            return 'a05d';
        case 'partly-cloudy-day':
            return 'c02d';
        case 'partly-cloudy-night':
            return 'c02n';
        case 'rain':
            return 'r02d';
        case 'sleet':
            return 's05d';
        case 'snow':
            return 's02d';
        case 'wind':
            return 's05d';
        default:
            return 'u00d';
    }
}

export { getCodeForWeathericon, getDateFromString }