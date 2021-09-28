const numberThis = (number) => {
  if (typeof number !== 'number') return "o valor deve ser um número"
  if (number < 0) return "Negativo";
  if (number === 0) return "Neutro";
  if (number > 0) return "Positivo";
};

module.exports = numberThis;