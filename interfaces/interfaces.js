"use strict";
function saudarComOla(pessoa) {
    console.log(`Olá ${pessoa.nome}`);
}
function mudarNome(pessoa) {
    pessoa.nome = "Luke";
}
const pessoa = {
    nome: "Felipe",
    idade: 21,
    saudar(sobrenome) {
        console.log(`Olá, meu nome é ${this.nome} ${sobrenome}`);
    },
};
saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
// saudarComOla({ nome: "Teste", idade: 21, altura: 1.82 });
pessoa.saudar("Scãowalker");
//# sourceMappingURL=interfaces.js.map