const { expect } = require('chai');
const numberThis = require('../numberThis');
const Positivo = "Positivo";
const Neutro = "Neutro";
const Negativo = "Negativo";

describe('verificando function', () => {
  it("verificando se é uma function", () => {
    expect(numberThis).to.be.a('function');
  });
  it("verificando se o retorno é um string", () => {
    expect(numberThis(1)).to.be.a('string');
  });
});

describe('Verificando a funcionalidade da função', () => {
  it("testando se passado o numero 1, o retorno vai ser Positivo", () => {
    expect(numberThis(1)).to.be.equal(Positivo);
  });
  it("testando se passado o numero 0, o retorno vai ser Neutro", () => {
    expect(numberThis(0)).to.be.equal(Neutro);
  });
  it("testando se passado o numero -1, o retorno vai ser Negativo", () => {
    expect(numberThis(-1)).to.be.equal(Negativo);
  });
});