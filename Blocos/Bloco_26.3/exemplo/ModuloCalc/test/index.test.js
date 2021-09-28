const { expect } = require('chai');

const calcular = require('../index');

const numberMedia = 8;
const numberMediaError = 5;
const RequestSuccess = "Aprovado";
const RequestError = "Reprovado";

describe("Testando função de calcular", () => {
  it("Verificando se existe a função de calcular", () => {
    expect(calcular).to.be.a('function');
  });
  it("verificando se retorno é undfined caso não for passando um numero", () => {
    expect(calcular("xablau")).equals(undefined);
  });
  it("Verficando se o retorno é uma string", ()=>{
    expect(calcular(numberMediaError)).to.be.a('string');
  });
  it("enviando determinado valor, ele é aprovado", ()=>{
    expect(calcular(numberMedia)).equals(RequestSuccess);
  });
  it("enviando determinado valor, ele é Reprovado", ()=>{
    expect(calcular(numberMediaError)).equals(RequestError);
  });
});
