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

export { getDateFromString }