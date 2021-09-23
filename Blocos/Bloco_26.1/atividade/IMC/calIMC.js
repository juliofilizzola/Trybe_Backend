const readline = require('readline-sync');

const calIMC = () => {
  const peso = readline.question('Qual é o seu peso? ');
  const altura = readline.questionInt('Qual a sua altura? ');

  console.log(`Peso: ${peso}, Altura: ${altura}`);

  const imc = (peso / Math.pow(altura / 100, 2)).toFixed(2);

  console.log(`IMC: ${imc}`);
  if(imc === 18,5) {
    console.log("Abaixo do peso (magreza)");
  } else if (imc > 18,5 && imc < 24,9) {
    console.log("peso normal");
  } else if (imc > 24,9 && imc < 29,9) {
    console.log("Acima do peso (sobrepeso)");
  } else if (imc > 24,9 && imc < 29,9) {
    console.log("Acima do peso (sobrepeso)");
  } else if (imc > 30,0 && imc < 34,9) {
    console.log("Obesidade grau I");
  } else if (imc > 35,0 && imc < 39,9) {
    console.log("Obesidade grau II");
  }  else if (imc > 40,0 ) {
    console.log("Obesidade grau III");
  } 
}
// calIMC();
module.exports = calIMC;
