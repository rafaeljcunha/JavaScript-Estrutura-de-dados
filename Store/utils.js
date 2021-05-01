function handleGetItemsPrice({ item, fornecedores }) {
  const fornecedor = fornecedores.find(({ preco }) => preco);
  return { Item: item, Preco: fornecedor.preco };
}

function handleGetFornecedoresPrecoTotal(data, fornecedorName) {
  let totalValue = 0;
  data.map(({ qtd, fornecedores }) =>
    fornecedores.filter((fornecedor) => {
      if (fornecedor.nome === fornecedorName) {
        const valorItems = qtd * fornecedor.preco;
        return (totalValue += valorItems);
      }
      return false;
    })
  );
  return totalValue;
}

module.exports = { handleGetFornecedoresPrecoTotal, handleGetItemsPrice };
