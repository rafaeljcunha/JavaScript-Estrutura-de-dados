const studyCase4Mock = require("./mock/studyCase4");

const eletronicosCategory = "Eletrônicos";
const roupasCategory = "Roupas";
const automoveisCategory = "Automóveis";
const productInCart = "Produtos no carrinho";

const getProductsSeparatedPerCategory = [];

const eletronicos = studyCase4Mock.filter(
  (eletronico) => eletronico.category === eletronicosCategory
);
getProductsSeparatedPerCategory.push({
  category: eletronicosCategory,
  data: eletronicos,
});

const roupas = studyCase4Mock.filter(
  (roupa) => roupa.category === roupasCategory
);
getProductsSeparatedPerCategory.push({
  category: roupasCategory,
  data: roupas,
});

const automoveis = studyCase4Mock.filter(
  (automovel) => automovel.category === automoveisCategory
);
getProductsSeparatedPerCategory.push({
  category: automoveisCategory,
  data: automoveis,
});

const produtosCarrinho = studyCase4Mock.filter((produto) => produto.inCart);
getProductsSeparatedPerCategory.push({
  category: productInCart,
  data: produtosCarrinho,
});

getProductsSeparatedPerCategory.map((productCategory) => {
  console.log({
    Categoria: productCategory.category,
    Produto: productCategory.data.map((product) => product.name),
  });
});
