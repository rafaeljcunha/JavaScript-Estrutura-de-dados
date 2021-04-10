//Cria um novo array a partir dos argumentos passados para o método.

const { numbers } = require("./utils");

let numbers2 = Array.of(1);
let numbers3 = Array.of(1, 2, 3, 4, 5, 6);

console.log(numbers2);
console.log(numbers3);

/*
Mesmo que executar
let numbers2 = [1];
let numbers3 = [1, 2, 3, 4, 5, 6];
*/

let numbersCopy = Array.of(...numbers);
console.log(numbersCopy);

/*
Mesmo que executar 
let numbersCopy = Array.from(numbers);
*/
