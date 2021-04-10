//Itera pelo array ordenando os elementos de acordo com a condição

const { friends, names } = require("./utils");

function comparePerson(a, b) {
  if (a.age < b.age) {
    return -1;
  } else if (a.age > b.age) {
    return 1;
  } else {
    return 0;
  }
}
friends.sort(comparePerson);
console.log(friends);

console.log(names.sort());

function compareNames(a, b) {
  if (a.toLowerCase() < b.toLowerCase()) {
    return -1;
  } else if (a.toLowerCase() > b.toLowerCase()) {
    return 1;
  } else {
    return 0;
  }
}

names.sort(compareNames);
console.log(names);

names.sort((a, b) => a.localeCompare(b));
console.log(names);
