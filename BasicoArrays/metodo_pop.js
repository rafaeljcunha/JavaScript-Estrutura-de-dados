//Para remover um valor do final de um array.

const { numbers } = require("./utils");

console.log(numbers, "antes");

numbers.pop();

console.log(numbers, "depois");
