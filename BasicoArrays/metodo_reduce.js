//Itera pelo array e devolve um valor que será somado a um acumulador.

const { numbers } = require("./utils");

console.log(numbers.reduce((previous, current) => previous + current));
