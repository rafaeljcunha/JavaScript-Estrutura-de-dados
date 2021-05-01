/* 
 Realizar a conversão de decimais para qualquer base, utilizando pilha (LIFO).
*/

const Stack = require("./Stack/Stack");

function converToBase({ value, base }) {
  const stackClass = new Stack();

  const digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let number = value;
  let rest = 0;

  let baseString = "";
  if (!(base >= 2 && base <= 36)) {
    return "";
  }
  while (number > 0) {
    rest = Math.floor(number % base);
    stackClass.push(rest);
    number = Math.floor(number / base);
  }
  while (!stackClass.isEmpty()) {
    baseString += digits[stackClass.pop()];
  }
  return `Result: ${baseString}`;
}

console.log(converToBase({ value: 345, base: 2 }));
console.log(converToBase({ value: 345, base: 8 }));
console.log(converToBase({ value: 345, base: 16 }));
console.log(converToBase({ value: 345, base: 35 }));
