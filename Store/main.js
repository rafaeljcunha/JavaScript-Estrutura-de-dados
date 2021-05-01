const StoreMethods = require("./StoreMethods");
const { storeInfoData, loja1 } = require("../mock/storeData");

const store = new StoreMethods(storeInfoData);

console.table(store.getItems());
console.table(store.getItemsPrice());
console.table(store.getFornecedores());
console.table(store.getFornecedorPrecoTotal(loja1));
console.table(store.getItemsQtd());
