"use strict";
function echo(objeto) {
    return objeto;
}
console.log(echo("Felipe").length);
console.log(echo(27));
console.log(echo({ nome: "Felipe", idade: 21 }));
// Usando Gerenics
function echoMelhorado(objeto) {
    return objeto;
}
console.log(echoMelhorado("Felipe").length);
console.log(echoMelhorado(27));
console.log(echoMelhorado({ nome: "Felipe", idade: 21 }));
// Generics disponíveis na API
const avaliacoes = [10, 9.3, 7.7];
avaliacoes.push(8.4);
// avaliacoes.push("9.8");
console.log(avaliacoes);
// Array
function imprimir(args) {
    args.forEach((elemento) => console.log(elemento));
}
imprimir([1, 2, 3]);
imprimir([1, 2, 3]);
imprimir(["Felipe", "Maria Eduarda", "Luke"]);
imprimir([
    { nome: "Felipe", idade: 21 },
    { nome: "Maria Eduarda", idade: 21 },
    { nome: "Luke", idade: 0.2 },
]);
imprimir([
    { nome: "Felipe", idade: 21 },
    { nome: "Maria Eduarda", idade: 21 },
    { nome: "Luke", idade: 0.2 },
]);
//# sourceMappingURL=genericos.js.map