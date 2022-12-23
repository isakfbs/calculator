const add = function (firstNumber, secondNumber) {
  return firstNumber + secondNumber;
};

const subtract = function (firstNumber, secondNumber) {
  return firstNumber - secondNumber;
};

const multiply = function (firstNumber, secondNumber) {
  return firstNumber * secondNumber;
};

const divide = function (firstNumber, secondNumber) {
  return firstNumber / secondNumber;
};

const operate = function (operator, number1, number2) {
  console.log(operator, number1, number2);
  switch (operator) {
    case '+':
      return add(number1, number2);
    case '-':
      return subtract(number1, number2);
    case '*':
      return multiply(number1, number2);
    case '/':
      return divide(number1, number2);
    default:
      console.log('something went wrong!');
  }
};
console.log(operate('+', 2, 2));

const sum = function (arrNumbers) {
  let numbers = [...arrNumbers];
  let total = 0;
  for (const num of numbers) {
    total += Number(num);
  }
  return total;
};

const power = function (baseNumber, exponentNumber) {
  let total = 1;
  for (let i = 0; i < exponentNumber; i++) {
    total *= baseNumber;
  }
  return total;
};

const factorial = function (number) {
  let total = 1;
  while (number != 0) {
    total *= number;
    number--;
  }
  return total;
};
