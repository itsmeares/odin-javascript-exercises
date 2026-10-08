const add = function(x, y) {
  return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(numbers) {
  return numbers.reduce((acc, cur) => {
    return acc + cur;
  }, 0)
};

const multiply = function(numbers) {
  return numbers.reduce((acc, cur) => {
    return acc * cur;
  })
};

const power = function(base, index) {
  return base ** index;
};

const factorial = function(num) {
  let result = 1;
	for (let i = 1; i <= num; i++) {
    result = result * i;  
  } return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
