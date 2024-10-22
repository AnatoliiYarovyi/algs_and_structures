const factorial = n => {
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
};

// Числа Фібоначчі -  1,1,2,3,5,8,13,21,34,55

const fibonacci = n => {
  if (n === 1 || n === 2) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
};

console.log(fibonacci(10));
