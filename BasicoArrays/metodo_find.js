//Busca um elemento no array, dada uma condição desejada (função de callback), e devolve o elemento caso seja encontrado.

const { numbers } = require("./utils");

function multipleOf13(element) {
  return element % 13 === 0;
}

console.log(numbers.find(multipleOf13));
