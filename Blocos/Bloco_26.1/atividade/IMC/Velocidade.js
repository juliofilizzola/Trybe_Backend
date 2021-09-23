const readline = require('readline-sync');

const calMedia = () => {
  const distancia = readline.questionInt('Distância ');
  const tempo = readline.questionInt('Tempo ');
  const media = (distancia / tempo).toFixed(2);
  console.log(`A velocidade media foi de: ${media}`);
};

// calMedia();


module.exports = calMedia;