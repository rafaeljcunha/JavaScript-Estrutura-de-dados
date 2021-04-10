//Permite acrescentar novos elementos no final de um array.

let { numbers } = require("./utils");

console.log(numbers, "antes");

numbers.push(11);
numbers.push(12, 13);

console.log(numbers, "depois");
