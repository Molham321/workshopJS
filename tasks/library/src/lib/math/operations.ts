/**
 * useful for task function to calculate certain operations
 * @param firstNumber first number
 * @param operation operation (+, -, *, /)
 * @param secondNumber second Number
 * @returns the math result
 */
export const operations = (
  firstNumber: number,
  operation: string = '+',
  secondNumber: number,
): number => {
  switch (operation) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    case '/':
      return firstNumber / secondNumber;
    default:
      return -1;
  }
};

export const add = (left: number, right: number): number => {
  return left + right;
};
