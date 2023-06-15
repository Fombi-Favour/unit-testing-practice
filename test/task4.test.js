const capitalize = require('../task4');

it("capitalize", () => {
    const BigLetter = capitalize("hello");
    expect(BigLetter).toBe("Hello");
})