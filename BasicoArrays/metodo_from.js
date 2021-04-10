//Cria um novo array a partir de um array existente.

const { numbers } = require("./utils");

let numbers2 = Array.from(numbers);
console.log(numbers2);

let pares = Array.from(numbers, (value) => value % 2 === 0);
console.log(pares);
