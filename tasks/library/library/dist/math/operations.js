"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.__operations = void 0;
/**
 * useful for task function to calculate certain operations
 * @param firstNumber first number
 * @param operation operation (+, -, *, /)
 * @param secondNumber second Number
 * @returns the math result
 */
const __operations = (firstNumber, operation = "+", secondNumber) => {
    switch (operation) {
        case "+":
            return firstNumber + secondNumber;
        case "-":
            return firstNumber - secondNumber;
        case "*":
            return firstNumber * secondNumber;
        case "/":
            return firstNumber / secondNumber;
        default:
            return -1;
    }
};
exports.__operations = __operations;
//# sourceMappingURL=operations.js.map