"use strict";
function saudarComOla(pessoa) {
    console.log(`Olá ${pessoa.nome}`);
}
function mudarNome(pessoa) {
    pessoa.nome = "Maria Eduarda";
}
const pessoa = { nome: "Felipe", idade: 21 };
saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
saudarComOla({ nome: "Teste", idade: 21, altura: 1.82 });
//# sourceMappingURL=interfaces.js.map