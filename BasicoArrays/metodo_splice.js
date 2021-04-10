//Usado para remover um elemento de um array, simplesmente especificando a posição/índice a partir do qual queremos fazer a remoção e a quantidade de elementos que gostaríamos de remover

const { numbers } = require("./utils");

console.log(numbers, "antes");

numbers.splice(3, 5);
// Este código removerá 5 elementos a partir do indice 3 do array

console.log(numbers, "depois");

numbers.splice(3, 0, 3, 4, 5, 6, 7);
console.log(numbers, "reinseridos");
