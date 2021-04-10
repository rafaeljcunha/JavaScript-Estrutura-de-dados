const { averageTempDay1, averageTempDay2 } = require("./utils");

function printMatriz(myMatriz) {
  for (let i = 0; i < myMatriz.length; i++) {
    for (let j = 0; j < myMatriz[i].length; j++) {
      console.table(myMatriz[i][j])
    }
  }
}


printMatriz([averageTempDay1, averageTempDay2])