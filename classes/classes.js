"use strict";
console.log("%cClasses", style);
class Data {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversario = new Data(23, 3, 2001);
aniversario.dia = 4;
console.log(aniversario.dia);
console.log(aniversario);
const casamento = new Data();
casamento.ano = 2022;
console.log(casamento);
class DataEsperta {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversarioEsperto = new DataEsperta(23, 3, 2001);
aniversarioEsperto.dia = 4;
console.log(aniversarioEsperto.dia);
console.log(aniversarioEsperto);
const casamentoEsperto = new DataEsperta();
casamentoEsperto.ano = 2022;
console.log(casamentoEsperto);
// Desafio Classe Produto
// Atributos: nome, preco, desconto
// Criar o construtor
// Obs 1: Desconto deve ser opcional (Valor padrao 0)
// Obs 2: Criar dois produtos: passando dois e tres params
class Produto {
    constructor(nome, preco, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    // Criar método: precoComDesconto
    // Quais sao os parametros e o retorno?
    // Alterar metodo resumo para mostrar o preco com desconto
    precoComDesconto() {
        return this.preco * (1 - this.desconto);
    }
    resumo() {
        return `${this.nome} custa R$ ${this.precoComDesconto()} com desconto de ${this.desconto * 100}%`;
    }
}
const produto1 = new Produto("Notebook", 2999.9, 0.15);
console.log(produto1.resumo());
const produto2 = new Produto("iPad Pro", 1199.9);
console.log(produto2.resumo());
//# sourceMappingURL=classes.js.map