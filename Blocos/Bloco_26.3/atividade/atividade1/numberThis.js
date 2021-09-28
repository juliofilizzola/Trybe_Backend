const numberThis = (number) => {
  if (number < 0) return "Negativo";
  if (number === 0) return "Neutro";
  if (number > 0) return "Positivo";
};

module.exports = numberThis;