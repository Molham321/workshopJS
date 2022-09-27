/**
 * useful for task function to calculate certain operations
 * @param firstNumber first number
 * @param operation operation (+, -, *, /)
 * @param secondNumber second Number
 * @returns the math result
 */
const __operations = (
  firstNumber: number,
  operation: string = "+",
  secondNumber: number
): number => {
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

export { __operations };
