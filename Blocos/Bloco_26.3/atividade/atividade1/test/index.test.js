const { expect } = require('chai');
const numberThis = require('../numberThis');

describe('testando function', () => {
  it("verificando se é uma function", () => {
    expect(numberThis).to.be.a('function');
  });
  it("verificando se o retorno é um string", () => {
    expect(numberThis(1)).to.be.a('string');
  });
});