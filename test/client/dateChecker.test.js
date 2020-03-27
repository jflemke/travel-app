import { isValidDate } from "../../src/client/js/dateChecker";

describe('Validate dates', () => {
    test('it should declare the date as valid', () => {
        const input = '30.03.2020';

        expect(isValidDate(input)).toBe(true);
    });

    test('it should declare the date as valid', () => {
        const input = '31.12.2020';

        expect(isValidDate(input)).toBe(true);
    });

    test('it should declare the date as valid', () => {
        const input = '01.01.2000';

        expect(isValidDate(input)).toBe(true);
    });

    test('it should declare the date as INvalid', () => {
        const input = '01.13.2000';

        expect(isValidDate(input)).toBe(false);
    });

    test('it should declare the date as INvalid', () => {
        const input = '40.01.2020';

        expect(isValidDate(input)).toBe(false);
    });

    test('it should declare the date as INvalid', () => {
        const input = '0.13.2000';

        expect(isValidDate(input)).toBe(false);
    });

});