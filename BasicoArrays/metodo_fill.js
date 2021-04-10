//Preenche o array com um valor estático.

let numbersFill = Array.of(1, 2, 3, 4, 5, 6);

let fill = numbersFill.fill(0);
console.log(fill);

let fillIndex = numbersFill.fill(2, 1);
console.log(fillIndex);

let fillLastIndex = numbersFill.fill(1, 3, 5);
console.log(fillLastIndex);

let ones = Array(6).fill(1);
console.log(ones);
