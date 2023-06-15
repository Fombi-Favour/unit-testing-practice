const reverseString = require('../task2');

describe('reverseString', () => {
        // Tests that the function returns the reversed string for input with normal characters
        it("test_normal_characters", () => {
            expect(reverseString("hello")).toEqual("olleh");
        });
})