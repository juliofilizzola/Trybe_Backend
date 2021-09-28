const { expect } = require('chai');

const readFile = require('../readFile');

const CONTEUDO_DO_ARQUIVO = 'VQV com TDD';

describe("Ler o Arquivo", () => {
  describe("Quando o arquivo existe", () => {
    describe("A resposta", () => {

      const resposta = readFile('arquivo.txt');

      it("é uma string", () => {
        expect(resposta).to.be.a('string');
      });

      it("é igual ao conteudo do arquivo", () => {
        expect(resposta).to.be.equals(CONTEUDO_DO_ARQUIVO);
      });

    });
  });

  describe('Quando o arquivo não existe', () => {
    describe('a resposta', () => {

      it('é igual a "null"', () => {
        const resposta = readFile('arquivo_que_nao_existe.txt');

        expect(resposta).to.be.equal(null);
      });
      
    });
  });
});