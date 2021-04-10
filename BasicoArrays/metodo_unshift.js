//Insere no início do array os valores passados como argumentos para o método

const { numbers } = require("./utils");

console.log(numbers, "antes");

numbers.unshift(-1, -2);

console.log(numbers, "depois");
