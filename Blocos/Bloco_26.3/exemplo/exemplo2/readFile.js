const fs = require('fs');

const readFile = (nameDoArquivo) => {
  try {
    const conteudoDoArquivo = fs.readFileSync(nomeDoArquivo, 'utf8');

    return conteudoDoArquivo;
  } catch (err) {
    return null;
  }
};

module.exports = readFile;