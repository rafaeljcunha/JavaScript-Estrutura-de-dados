const loja1 = "Loja 1";
const loja2 = "Loja 2";
const comparar = "Loja para comparar preços";

const storeInfoData = [
  {
    item: "Adaptador Iphone para P2 (FONE)",
    qtd: 3,
    fornecedores: [
      { nome: loja1, preco: 12.0 },
      { nome: loja2, preco: 0 },
    ],
    comparar: {
      nome: comparar,
      preco: 10.0,
    },
  },
  {
    item: "Ring Light 12p com tripe",
    qtd: 1,
    fornecedores: [
      { nome: loja1, preco: 80.0 },
      { nome: loja2, preco: 0 },
    ],
    comparar: {
      nome: comparar,
      preco: 145.0,
    },
  },
  {
    item: "Ring Light 10p com tripe",
    qtd: 1,
    fornecedores: [
      { nome: loja1, preco: 75.0 },
      { nome: loja2, preco: 0 },
    ],
    comparar: {
      nome: comparar,
      preco: 0,
    },
  },
  {
    item: "Fone bluetooth air pods pro 4",
    qtd: 3,
    fornecedores: [
      { nome: loja1, preco: 55.0 },
      { nome: loja2, preco: 0 },
    ],
    comparar: {
      nome: comparar,
      preco: 80.0,
    },
  },
  {
    item: "Mouse simples Hmaston",
    qtd: 3,
    fornecedores: [
      { nome: loja1, preco: 8.0 },
      { nome: loja2, preco: 0 },
    ],
    comparar: {
      nome: comparar,
      preco: 15.0,
    },
  },
  {
    item: "Fone colorido com fio estilo iphone",
    qtd: 6,
    fornecedores: [
      { nome: loja1, preco: 6.0 },
      { nome: loja2, preco: 0 },
    ],
    comparar: {
      nome: comparar,
      preco: 10.0,
    },
  },
  {
    item: "Fone P2 branco com fio estilo iphone",
    qtd: 4,
    fornecedores: [
      { nome: loja1, preco: 5.0 },
      { nome: loja2, preco: 0 },
    ],
    comparar: {
      nome: comparar,
      preco: 10.0,
    },
  },
  {
    item: "Fone para iphone usb-c",
    qtd: 4,
    fornecedores: [
      { nome: loja1, preco: 15.0 },
      { nome: loja2, preco: 0 },
    ],
    comparar: {
      nome: comparar,
      preco: 30.0,
    },
  },
  {
    item: "Projetor estrelas",
    qtd: 2,
    fornecedores: [
      { nome: loja1, preco: 32.0 },
      { nome: loja2, preco: 0 },
    ],
    comparar: {
      nome: comparar,
      preco: 50.0,
    },
  },
  {
    item: "Suporte articulado para celular de mesa",
    qtd: 3,
    fornecedores: [
      { nome: loja1, preco: 0 },
      { nome: loja2, preco: 11.0 },
    ],
    comparar: {
      nome: comparar,
      preco: 20.0,
    },
  },
  {
    item: "Caixa bluetooth JBL",
    qtd: 2,
    fornecedores: [
      { nome: loja1, preco: 48.0 },
      { nome: loja2, preco: 0 },
    ],
    comparar: {
      nome: comparar,
      preco: 0,
    },
  },
  {
    item: "Suporte de celular para moto ou bike",
    qtd: 3,
    fornecedores: [
      { nome: loja1, preco: 13.0 },
      { nome: loja2, preco: 0 },
    ],
    comparar: {
      nome: comparar,
      preco: 20.0,
    },
  },
  {
    item: "Cabo RCA",
    qtd: 4,
    fornecedores: [
      { nome: loja1, preco: 4.0 },
      { nome: loja2, preco: 0 },
    ],
    comparar: {
      nome: comparar,
      preco: 0,
    },
  },
  {
    item: "Hub usb 4 portas",
    qtd: 3,
    fornecedores: [
      { nome: loja1, preco: 15.0 },
      { nome: loja2, preco: 0 },
    ],
    comparar: {
      nome: comparar,
      preco: 35.0,
    },
  },
  {
    item: "Amplificador de tela",
    qtd: 3,
    fornecedores: [
      { nome: loja1, preco: 14.0 },
      { nome: loja2, preco: 0 },
    ],
    comparar: {
      nome: comparar,
      preco: 0,
    },
  },
  {
    item: "Cabo usb-c",
    qtd: 4,
    fornecedores: [
      { nome: loja1, preco: 6.0 },
      { nome: loja2, preco: 0 },
    ],
    comparar: {
      nome: comparar,
      preco: 7.0,
    },
  },
  {
    item: "Cabo usb para iphone",
    qtd: 4,
    fornecedores: [
      { nome: loja1, preco: 6.0 },
      { nome: loja2, preco: 0 },
    ],
    comparar: {
      nome: comparar,
      preco: 15.0,
    },
  },
  {
    item: "Fone HMASTON B30 bluetooth",
    qtd: 2,
    fornecedores: [
      { nome: loja1, preco: 50.0 },
      { nome: loja2, preco: 0 },
    ],
    comparar: {
      nome: comparar,
      preco: 0,
    },
  },
  {
    item: "Cabo v8 magnético",
    qtd: 3,
    fornecedores: [
      { nome: loja1, preco: 12.0 },
      { nome: loja2, preco: 0 },
    ],
    comparar: {
      nome: comparar,
      preco: 0,
    },
  },
  {
    item: "Cabo magnetico iphone",
    qtd: 3,
    fornecedores: [
      { nome: loja1, preco: 12.0 },
      { nome: loja2, preco: 0 },
    ],
    comparar: {
      nome: comparar,
      preco: 0,
    },
  },
  {
    item: "Carregador v8",
    qtd: 3,
    fornecedores: [
      { nome: loja1, preco: 0 },
      { nome: loja2, preco: 5.5 },
    ],
    comparar: {
      nome: comparar,
      preco: 0,
    },
  },
  {
    item: "Suporte celular para carro",
    qtd: 3,
    fornecedores: [
      { nome: loja1, preco: 11.0 },
      { nome: loja2, preco: 0 },
    ],
    comparar: {
      nome: comparar,
      preco: 20.0,
    },
  },
  {
    item: "Caixa de som WS-887",
    qtd: 4,
    fornecedores: [
      { nome: loja1, preco: 0 },
      { nome: loja2, preco: 15.0 },
    ],
    comparar: {
      nome: comparar,
      preco: 30.0,
    },
  },
  {
    item: "Fone JBL Wireless",
    qtd: 2,
    fornecedores: [
      { nome: loja1, preco: 0 },
      { nome: loja2, preco: 46.0 },
    ],
    comparar: {
      nome: comparar,
      preco: 0,
    },
  },
  {
    item: "Pulseira para smartwatch",
    qtd: 6,
    fornecedores: [
      { nome: loja1, preco: 10.0 },
      { nome: loja2, preco: 0 },
    ],
    comparar: {
      nome: comparar,
      preco: 0,
    },
  },
  {
    item: "Cabo hdmi 2m",
    qtd: 3,
    fornecedores: [
      { nome: loja1, preco: 12.0 },
      { nome: loja2, preco: 0 },
    ],
    comparar: {
      nome: comparar,
      preco: 30.0,
    },
  },
  {
    item: "Lampada bluetooth musical",
    qtd: 2,
    fornecedores: [
      { nome: loja1, preco: 30.0 },
      { nome: loja2, preco: 0 },
    ],
    comparar: {
      nome: comparar,
      preco: 40.0,
    },
  },
  {
    item: "Caixa de som Cogumelo",
    qtd: 3,
    fornecedores: [
      { nome: loja1, preco: 28.0 },
      { nome: loja2, preco: 0 },
    ],
    comparar: {
      nome: comparar,
      preco: 0,
    },
  },
  {
    item: "Fone airpods pro hmaston",
    qtd: 2,
    fornecedores: [
      { nome: loja1, preco: 45.0 },
      { nome: loja2, preco: 0 },
    ],
    comparar: {
      nome: comparar,
      preco: 0,
    },
  },
  {
    item: "Adaptador placa de som usb",
    qtd: 3,
    fornecedores: [
      { nome: loja1, preco: 8.0 },
      { nome: loja2, preco: 0 },
    ],
    comparar: {
      nome: comparar,
      preco: 15.0,
    },
  },
  {
    item: "Mouse gamer com led e fio",
    qtd: 2,
    fornecedores: [
      { nome: loja1, preco: 0 },
      { nome: loja2, preco: 12.0 },
    ],
    comparar: {
      nome: comparar,
      preco: 0,
    },
  },
  {
    item: "Mini teclado com led",
    qtd: 3,
    fornecedores: [
      { nome: loja1, preco: 0 },
      { nome: loja2, preco: 21.0 },
    ],
    comparar: {
      nome: comparar,
      preco: 35.0,
    },
  },
  {
    item: "Transmissor Car Bluetooth",
    qtd: 4,
    fornecedores: [
      { nome: loja1, preco: 7.0 },
      { nome: loja2, preco: 0 },
    ],
    comparar: {
      nome: comparar,
      preco: 0,
    },
  },
  {
    item: "Som bluetooth banheiro",
    qtd: 4,
    fornecedores: [
      { nome: loja1, preco: 20.0 },
      { nome: loja2, preco: 0 },
    ],
    comparar: {
      nome: comparar,
      preco: 35.0,
    },
  },
  {
    item: "Ring light 6p",
    qtd: 2,
    fornecedores: [
      { nome: loja1, preco: 0 },
      { nome: loja2, preco: 20.0 },
    ],
    comparar: {
      nome: comparar,
      preco: 0,
    },
  },
  {
    item: "Suporte para celular com ventosa",
    qtd: 5,
    fornecedores: [
      { nome: loja1, preco: 1.5 },
      { nome: loja2, preco: 0 },
    ],
    comparar: {
      nome: comparar,
      preco: 0,
    },
  },
  {
    item: "Ring light com espelho 6p",
    qtd: 1,
    fornecedores: [
      { nome: loja1, preco: 80.0 },
      { nome: loja2, preco: 0 },
    ],
    comparar: {
      nome: comparar,
      preco: 0,
    },
  },
  {
    item: "Microfone lapela",
    qtd: 3,
    fornecedores: [
      { nome: loja1, preco: 0 },
      { nome: loja2, preco: 5.0 },
    ],
    comparar: {
      nome: comparar,
      preco: 0,
    },
  },
  {
    item: "TV Box",
    qtd: 2,
    fornecedores: [
      { nome: loja1, preco: 0 },
      { nome: loja2, preco: 160.0 },
    ],
    comparar: {
      nome: comparar,
      preco: 230.0,
    },
  },
  {
    item: "Adaptador usb para tipo c",
    qtd: 5,
    fornecedores: [
      { nome: loja1, preco: 0 },
      { nome: loja2, preco: 2.5 },
    ],
    comparar: {
      nome: comparar,
      preco: 0,
    },
  },
  {
    item: "Adaptador HDMI para VGA",
    qtd: 3,
    fornecedores: [
      { nome: loja1, preco: 0 },
      { nome: loja2, preco: 15.0 },
    ],
    comparar: {
      nome: comparar,
      preco: 0,
    },
  },
  {
    item: "Ring light self orelinha",
    qtd: 3,
    fornecedores: [
      { nome: loja1, preco: 0 },
      { nome: loja2, preco: 12.0 },
    ],
    comparar: {
      nome: comparar,
      preco: 0,
    },
  },
  {
    item: "Adaptador Wifi usb",
    qtd: 3,
    fornecedores: [
      { nome: loja1, preco: 0 },
      { nome: loja2, preco: 17.0 },
    ],
    comparar: {
      nome: comparar,
      preco: 25.0,
    },
  },
  {
    item: "Cabo iphone",
    qtd: 5,
    fornecedores: [
      { nome: loja1, preco: 0 },
      { nome: loja2, preco: 2.0 },
    ],
    comparar: {
      nome: comparar,
      preco: 7.0,
    },
  },
];

module.exports = { storeInfoData, loja1, loja2, comparar };
