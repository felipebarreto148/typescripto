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
//# sourceMappingURL=genericos.js.map