const {
  handleGetFornecedoresPrecoTotal,
  handleGetItemsPrice,
} = require("./utils");

class StoreMethods {
  constructor(data) {
    this.data = data;
  }

  getItemsQtd() {
    return { Quantidade: this.data.length };
  }

  getFornecedores() {
    if (this.getItemsQtd()) {
      return {
        Nome: this.data
          .find((item) => item.fornecedores)
          .fornecedores.map((fornecedor) => fornecedor.nome),
      };
    }
    return "Não possui itens cadastrados";
  }

  getItems() {
    return this.data.map(({ item }) => ({ Item: item }));
  }

  getItemsPrice() {
    return this.data.map(handleGetItemsPrice);
  }

  getFornecedorPrecoTotal(fornecedorName) {
    const totalValue = handleGetFornecedoresPrecoTotal(
      this.data,
      fornecedorName
    );
    return {
      Loja: fornecedorName,
      Total: totalValue,
    };
  }
}

module.exports = StoreMethods;
