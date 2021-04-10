//Itera pelo array aplicando a condição para cada item do array.

const { numbers } = require("./utils");

for (const number of numbers) {
  console.log(number % 2 === 0 ? "par" : "impar");
}
