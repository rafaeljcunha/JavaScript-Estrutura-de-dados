//Itera pelo array aplicando a condição para cada item do array.

const { numbers } = require("./utils");

numbers.forEach((elemento) => console.log(elemento % 2 === 0));
