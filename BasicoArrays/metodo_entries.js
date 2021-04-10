//Devolve @@iterator, que contém pares chave/valor.

const { numbers } = require("./utils");

let aEntries = numbers.entries();

console.log(aEntries.next());
console.log(aEntries.next());
console.log(aEntries.next());
console.log(aEntries.next());

for (const number of aEntries) {
  console.log(number);
}
