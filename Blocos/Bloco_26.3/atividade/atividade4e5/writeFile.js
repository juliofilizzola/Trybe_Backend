const fs = require('fs');

const writeFile = (arquivoName, text) => {
  fs.writeFileSync('./meu-arquivo.txt', 'Meu textão');
  return "ok";
}

module.exports = writeFile;