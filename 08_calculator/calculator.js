const add = function(x,y) {
	return x + y;
};

const subtract = function(x,y) {
	return Math.abs(x - y)
};

const sum = function(arr) {
  let l = arr.length
  let sum = 0;
	for (let i = 0; i < l; i++) {
    sum += arr[i]
  }
  return sum
};

const multiply = function(arr) {
  let l = arr.length
  let product = 1;
	for (let i = 0; i < l; i++) {
    product *= arr[i]
  }
  return product
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(X) {
 // Recursion!
	if (X == 0) {
    return 1;
  }
  else {
    return  X * factorial(X - 1);
  }
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
