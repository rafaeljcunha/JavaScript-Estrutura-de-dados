const matriz3x3x3 = [];

for (let i = 0; i < 3; i++) {
  matriz3x3x3[i] = []
  for (let j = 0; j < 3; j++) {
    matriz3x3x3[i][j] = []
    for (let z = 0; z < 3; z++) {
      matriz3x3x3[i][j][z]
    }
  }
}

console.log(matriz3x3x3, "primeiro")
for (let i = 0; i < matriz3x3x3.length; i++) {
  for (let j = 0; j < matriz3x3x3[i].length; j++) {
    console.log(matriz3x3x3[i][j])
    for (let z = 0; z < matriz3x3x3[i][j].length; z++) {
      console.log(matriz3x3x3[i][j][z])
    }
  }
}
