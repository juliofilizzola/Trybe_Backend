const calculadora = (media) => {
  if (!typeof media === 'number') return undefined;

 if (media > 0 && media <= 6 ) {
    return "Reprovado";
  } else if (media >= 7) {
    return "Aprovado"
  }

}

module.exports = calculadora;