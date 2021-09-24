const fs = require('fs').promises;

const text = "eu to exemplificando o método writeFile do node.js, sendo ele uma função de escrita do documento. com valores de resposta e de erro."

fs.writeFile('./meu-arquivo.txt', text)
  .then(() => {
    console.log('Arquivo escrito com sucesso!');
  })
  .catch((err) => {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  });