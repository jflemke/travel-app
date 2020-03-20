import { isValidDate } from "../../src/client/js/dateChecker";

describe('Validate URLs', () => {
   test('it should declare the url as valid', () => {
       const input = 'www.google.de';

       expect(isValidDate(input)).toBe(true);
   });

    test('it should declare the url as valid', () => {
        const input = 'https://www.google.de';

        expect(isValidDate(input)).toBe(true);
    });

    test('it should declare the url as valid', () => {
        const input = 'https://www.wired.com/story/airbus-maveric-blended-wing-jet/';

        expect(isValidDate(input)).toBe(true);
    });

    test('it should declare the url as INvalid', () => {
        const input = 'hallo/bye';

        expect(isValidDate(input)).toBe(false);
    });

    test('it should declare the url as INvalid', () => {
        const input = 'xYz';

        expect(isValidDate(input)).toBe(false);
    });

});