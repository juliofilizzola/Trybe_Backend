const { expect } = require('chai');
const numberThis = require('../numberThis');

describe('testando function', () => {
  it("verificando se é uma function", () => {
    expect(numberThis).to.be.a('function');
  });
});