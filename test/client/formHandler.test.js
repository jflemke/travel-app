import { handleSubmit } from "../../src/client/js/formHandler";
import {isValidDate} from "../../src/client";

describe('Handle submit', () => {
    test('It should display response in html field', async () => {
        jest.spyOn(global, 'preventDefault').mockImplementation(() => {return;});

        document.body.innerHTML = '<div id="results"></div>';

        // Mock fetch from https://medium.com/@rishabhsrao/mocking-and-testing-fetch-with-jest-c4d670e2e167
        const mockSuccessResponse = {'polarity': 'yeiii', 'subjectivity': 'nooo'};
        const mockJsonPromise = Promise.resolve(mockSuccessResponse); // 2
        const mockFetchPromise = Promise.resolve({ // 3
            json: () => mockJsonPromise,
        });

        jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);

        await handleSubmit();

        expect(isValidDate(input)).toBe(true);
    });
});