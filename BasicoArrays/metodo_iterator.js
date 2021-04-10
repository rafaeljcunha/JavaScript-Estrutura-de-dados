//Devolve um objeto iterador que contém os pares chave/valor do array; pode ser chamado sincronamente para obter a chave/valor dos elementos do array.

const { numbers } = require("./utils");

let iterator = numbers[Symbol.iterator]();

console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);

for (const numbers of iterator) {
  console.log(numbers);
}
