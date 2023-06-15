const Calculator = require("../task3");

describe("calculator_add", () => {
  // Tests that add method returns the correct result for positive integers
  it("test_add_positive_integers", () => {
    const calculator = new Calculator(2, 3);
    expect(calculator.add()).toBe(5);
  });
  // Tests that add method returns the correct result for negative integers
  it("test_add_negative_integers", () => {
    const calculator = new Calculator(-5, -3);
    expect(calculator.add()).toBe(-8);
  });
  // Tests that add method returns the correct result for decimal numbers
  it("test_add_decimal_numbers", () => {
    const calculator = new Calculator(2.5, 3.5);
    expect(calculator.add()).toBeCloseTo(6.0);
  });
});

describe("calculator_subtract", () => {
  // Tests that subtract method returns the correct result for positive integers
  it("test_subtract_positive_integers", () => {
    const calculator = new Calculator(3, 2);
    expect(calculator.subtract()).toBe(1);
  });
  // Tests that subtract method returns the correct result for negative integers
  it("test_subtract_negative_integers", () => {
    const calculator = new Calculator(-5, -3);
    expect(calculator.subtract()).toBe(-2);
  });
  // Tests that subtract method returns the correct result for decimal numbers
  it("test_subtract_decimal_numbers", () => {
    const calculator = new Calculator(5.5, 3.4);
    expect(calculator.subtract()).toBeCloseTo(2.1);
  });
});

describe("calculator_multiply", () => {
  // Tests that multiply method returns the correct result for positive integers
  it("test_multiply_positive_integers", () => {
    const calculator = new Calculator(5, 12);
    expect(calculator.multiply()).toBe(60);
  });
  // Tests that multiply method returns the correct result for negative integers
  it("test_multiply_negative_integers", () => {
    const calculator = new Calculator(-5, 3);
    expect(calculator.multiply()).toBe(-15);
  });
  // Tests that multiply method returns the correct result for decimal numbers
  it("test_multiply_decimal_numbers", () => {
    const calculator = new Calculator(5.5, 3.4);
    expect(calculator.multiply()).toBeCloseTo(18.7);
  });
});

describe("calculator_divide", () => {
  // Tests that divide method returns the correct result for positive integers
  it("test_divide_positive_integers", () => {
    const calculator = new Calculator(60, 12);
    expect(calculator.divide()).toBe(5);
  });
  // Tests that divide method returns the correct result for decimal numbers
  it("test_divide_decimal_numbers", () => {
    const calculator = new Calculator(1.25, 5.0);
    expect(calculator.divide()).toBeCloseTo(0.25);
  });
  // Tests that divide method returns 'Invalid division' when dividing by zero
  it("test_divide_by_zero", () => {
    const calculator = new Calculator(10, 0);
    expect(calculator.divide()).toBe("Invalid division");
  });
});
