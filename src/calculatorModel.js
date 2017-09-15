class Calculator {
    add (a, b) {
        if (a === 0) return b;

        if (b === 0) return a;

        return a + b;
    }

    multiply (a, b) {
        if (a === 0 || b === 0) {
            return 0;
        }
        return a * b;
    }

    subtract (a, b) {
        return a - b;
    }

    divide (a, b) {
        if (b === 0) throw new Error('Attempt to divide by zero');
        return a / b;
    }
}

export { Calculator }