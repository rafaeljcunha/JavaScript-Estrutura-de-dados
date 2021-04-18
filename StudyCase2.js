/* 
 Realizar a conversão de decimais para binário, utilizando pilha (LIFO).
*/

const Pilha = require("./Pilhas/Pilha");

function convertDecimalToBinary(value) {
  const stackClass = new Pilha();

  let number = value;
  let rest = 0;
  let binaryString = "";
  let index = 1;

  while (number > 0) {
    rest = Math.floor(number % 2);
    console.log(rest, `index ${index++}`);
    stackClass.push(rest);
    number = Math.floor(number / 2);
  }
  console.log("---------------------");
  while (!stackClass.isEmpty()) {
    binaryString += stackClass.pop().toString();
    console.log(binaryString, `index ${(index -= 1)}`);
  }
  return `Result: ${binaryString}`;
}

console.log(convertDecimalToBinary(200));
