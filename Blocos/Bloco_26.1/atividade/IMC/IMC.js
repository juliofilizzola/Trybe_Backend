const calIMC = (peso, altura) => {
  console.log(`Peso: ${peso}, Altura: ${altura}`);

  const imc = (peso / Math.pow(altura / 100, 2)).toFixed(2);

  console.log(`IMC: ${imc}`);
}
// calIMC(92, 168);
module.exports = calIMC;
