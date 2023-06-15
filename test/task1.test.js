const stringLength = require('../task1');

describe('stringLength', () => {
    it('should return the length of a string', () => {
        expect(stringLength('hello')).toBe(5);
    });
    it("test_short_string", () => {
        expect(() => stringLength("")).toThrow("Invalid string");
    });
})