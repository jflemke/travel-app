function isValidDate(inputText) {
    // RegEx from https://codegolf.stackexchange.com/questions/464/shortest-url-regex-match-in-javascript
    return /(0[1-9]|1[0-9]|2[0-9]|3[01]).(0[1-9]|1[012]).[0-9]{4}/.test(inputText);
}

export { isValidDate }
