//Itera pelo array e devolve um novo array com os elementos que atenderam a condição e retornou true

const { numbers } = require("./utils");

const isEven = (values) => values % 2 === 0;

const myFilter = numbers.filter(isEven);

console.log(myFilter);
