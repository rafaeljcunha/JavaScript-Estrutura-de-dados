//Itera pelos elementos do array até que a função devolva false

const { numbers } = require("./utils");

const isEven = (values) => values % 2 === 0;

console.log(numbers.every(isEven));
