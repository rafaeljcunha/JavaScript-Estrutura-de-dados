//Devolve true caso um elemento seja encontrado no array, e false caso contrário.

const { numbers } = require("./utils");

console.log(numbers.includes(15));
console.log(numbers.includes(20));
//Nesse exemplo, includes(15) devolverá true e includes(20) devolverá false, pois o elemento 20 não existe no array numbers.

let numbers2 = [7, 6, 5, 4, 3, 2, 1];

console.log(numbers2.includes(4, 5));
//A saída do exemplo anterior será false porque o elemento 4 não existe após a posição 5.
