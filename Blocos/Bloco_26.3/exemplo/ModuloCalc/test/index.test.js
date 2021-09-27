const { expect } = require('chai');

const calcular = require('../index');

const numberMedia = 8;
const numberMediaError = 5;
const RequestSuccess = "Aprovado";
const RequestError = "Reprovado";

describe("Testando função de calcular", () => {
  it("verificando se retorno é undfined caso não for passando um numero", () => {
    expect(calcular("xablau")).equals(undefined);
  });
  it("enviando determinado valor, ele é aprovado", ()=>{
    expect(calcular(numberMedia)).equals(RequestSuccess);
  });
  it("enviando determinado valor, ele é Reprovado", ()=>{
    expect(calcular(numberMediaError)).equals(RequestError);
  });
});
