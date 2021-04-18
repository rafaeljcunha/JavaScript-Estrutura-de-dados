/* 
  Realizar controle da terceira seção baseado na quantidade de itens.
  Se a terceira seção não conter descrições, não deverá ser visualizada.
  E manipular o array, adicionando uma key para cada objeto do optionsList
  com o nome seção, exemplo {key: "Seção 1", data: [...]}.
*/

const optionsList = require("./mock/studyCase1");

const result = optionsList
  .map((option) => {
    const find = option.data.find((opt) => opt);
    const { data } = option;
    return { key: find?.title, data };
  })
  .filter((option) => {
    const thirdSection = option.key === "Seção 3" ? option.data : null;
    if (thirdSection && thirdSection.length < 2 && option.key === "Seção 3") {
      return false;
    } else {
      return option.data;
    }
  });

console.log(result);
