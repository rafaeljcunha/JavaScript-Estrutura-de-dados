//Itera por todo array aplicando uma determinada condição

const { numbers } = require("./utils");

const isEven = (values) => values % 2 === 0;

const myMap = numbers.map(isEven);

console.log(myMap);
