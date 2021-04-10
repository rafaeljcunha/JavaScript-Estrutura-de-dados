//Itera pelo array ordenando os elementos de acordo com a condição

const { numbers } = require("./utils");
numbers.reverse();
console.log(numbers);

numbers.sort();
console.log(numbers);

numbers.sort((a, b) => a - b);
console.log(numbers);

numbers.reverse();
console.log(numbers);

function compare(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0;
  }
}

numbers.sort(compare);
console.log(numbers);
