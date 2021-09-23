const readline = require('readline-sync');
const Velocidade = require('./Velocidade');
const sorteio = require('./sorteio');
const calIMC = require('./calIMC');

const select = () => {
  const item = ["IMC", "velocidade", "sorteio"];

  const index = readline.keyInSelect(item, "Escolha uma opção:");

  if (item[index] === "IMC") {
    return calIMC();
  } else if (item[index] === "velocidade") {
    return Velocidade();
  } else if (item[index] === "sorteio") {
    return sorteio();
  }
}

select();