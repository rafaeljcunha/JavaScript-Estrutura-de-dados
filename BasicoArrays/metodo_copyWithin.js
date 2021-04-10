//Copia uma sequência de valores do array na posição de um índice de início.

const { copyArray } = require("./utils");

let realocElements = copyArray.copyWithin(0, 3);
console.log(realocElements);

let realocElements2 = copyArray.copyWithin(1, 3, 5);
console.log(realocElements2);
