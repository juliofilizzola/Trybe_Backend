const { expect } = require('chai');

const calcular = require('../index');

const numberMedia = 8
const RequestSuccess = "aprovado"

describe("Testando função de calcular", () => {
  it("enviando determinado valor, ele é aprovado", ()=>{
    expect(calcular(numberMedia)).equals(RequestSuccess);
  });
});
