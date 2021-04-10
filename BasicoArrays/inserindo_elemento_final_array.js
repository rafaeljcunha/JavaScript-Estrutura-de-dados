let { numbers } = require("./utils")

console.log(numbers, "antes")

numbers[numbers.length] = 10;

console.log(numbers, "depois")