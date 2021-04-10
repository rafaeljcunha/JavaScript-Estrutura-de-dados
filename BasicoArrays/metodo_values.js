const { numbers } = require("./utils")

let aValues = numbers.values()

console.log(aValues.next())
console.log(aValues.next())
console.log(aValues.next())
console.log(aValues.next())

for (const number of aValues){
  console.log(number)
}