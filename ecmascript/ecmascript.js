"use strict";
let style = "background: white; color: black; padding: 10px; border-radius: 8px;";
// let & const
console.log("%clet & const", style);
let seraQuePode = "?";
console.log(seraQuePode);
let estafrio = true;
if (estafrio) {
    let acao = "Colocar o casaco!";
    console.log(acao);
}
const cpf = "123.456.789-99";
// cpf = "987.654.321-00"
console.log(cpf);
const segredo = "externo!";
function revelar() {
    const segredo = "interno";
    console.log(segredo);
}
console.log(segredo);
revelar();
{
    {
        const def = "def";
        console.log(def);
    }
}
for (let i = 0; i < 10; i++) {
    console.log(i);
}
// console.log(i);
// Arrow Function
console.log("%cArrow Functions", style);
const somar = function (n1, n2) {
    return n1 + n2;
};
console.log(somar(2, 2));
const subtrair = (n1, n2) => n1 - n2;
console.log(subtrair(10, 2));
const saudacao = () => console.log("ola!");
saudacao();
const falarCom = (pessoa) => console.log("ola " + pessoa);
falarCom("Felipe");
// This
console.log("%cThis", style);
/* function normalComThis() {
    console.log(this);
}

const normalComThisEspecial = normalComThis.bind({ nome: "Felipe" });

normalComThisEspecial();

// O this de uma arrow function, aponta para o this da linha anterior a ela.
const arrowComThis = () => console.log(this);
arrowComThis();

const arrowComThisEspecial = arrowComThis.bind({ nome: "Felipe" });
arrowComThisEspecial(); */
// Parametros padrao
console.log("%cParametros padrao", style);
function contagemRegressiva(inicio = 5, fim = inicio - 5) {
    console.log(inicio);
    while (inicio > fim) {
        inicio--;
        console.log(inicio);
    }
    console.log("Fim!");
}
contagemRegressiva();
contagemRegressiva(3);
//# sourceMappingURL=ecmascript.js.map