const readline = require('readline-sync');

const restartSorteio = () => {
  const restart = readline.keyInYN("Deseja reiniciar?");

  let started = 0;

  if (restart) {
    started += 1;
  }

  for (let index = 0; index < started; index++ ) {
    sorteio();
  }
}

const sorteio = () => {
  const numberSorted = readline.questionInt('Qual o seu numero? ');
  const numberRandom = Math.floor(Math.random() * 10);
  if (numberSorted === numberRandom) {
    console.log("Parabéns, número correto!");
  } else {
    console.log(`Opa, não foi dessa vez. O número era ${numberRandom}`);
  }
  
  restartSorteio();
};



module.exports = sorteio;