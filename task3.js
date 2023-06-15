class Calculator {
    constructor(a, b) {
            this.a = a;
            this.b = b;
    }
    add() {
        return this.a + this.b;
    }
    subtract() {
        return this.a - this.b;
    }
    multiply() {
        return this.a * this.b;
    }
    divide() {
        if(this.b === 0) return "Invalid division"
        return this.a / this.b;
    }
}

module.exports = Calculator;