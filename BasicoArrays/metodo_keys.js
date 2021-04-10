//Devolve @@iterator, contendo as chaves do array.

const { numbers } = require("./utils");

let aKeys = numbers.keys();

console.log(aKeys.next());
console.log(aKeys.next());
console.log(aKeys.next());
console.log(aKeys.next());

for (const number of aKeys) {
  console.log(number);
}
