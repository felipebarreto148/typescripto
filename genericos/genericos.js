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
const chamarEcho = echoMelhorado;
console.log(chamarEcho("Alguma coisa"));
// Class com Generics
class OperacaoBinaria {
    constructor(operando1, operando2) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }
}
// console.log(new OperacaoBinaria('Bom', 'Dia').executar());
// console.log(new OperacaoBinaria(3, 7).executar());
// console.log(new OperacaoBinaria(3, 'Opa').executar());
class SomaBinaria extends OperacaoBinaria {
    executar() {
        return this.operando1 + this.operando2;
    }
}
console.log(new SomaBinaria(3, 7).executar());
class DiferencaEntreDatas extends OperacaoBinaria {
    getTime(data) {
        let { dia, mes, ano } = data;
        return new Date(`${mes}/${dia}/${ano}`).getTime();
    }
    executar() {
        const t1 = this.getTime(this.operando1);
        const t2 = this.getTime(this.operando2);
        const diferenca = Math.abs(t1 - t2);
        const dia = 1000 * 60 * 60 * 24;
        return `${Math.ceil(diferenca / dia)} dia(s)`;
    }
}
const d1 = new Data(28, 3, 2022);
const d2 = new Data(27, 6, 2022);
console.log(new DiferencaEntreDatas(d1, d2).executar());
// Desafio Classe Fila
// Atributos: fila: (Array)
// Métodos: entrar proximo imprimir
class Fila {
    constructor(...args) {
        this.fila = args;
    }
    entrar(element) {
        this.fila.push(element);
    }
    proximo() {
        if (this.fila.length > 0 && this.fila[0]) {
            const primeiro = this.fila[0];
            this.fila.splice(0, 1);
            return primeiro;
        }
        else {
            return "Fila vazia";
        }
    }
    imprimir() {
        console.log(this.fila);
    }
}
const fila = new Fila("Felipe", "Maria Eduarda", "Luke");
fila.imprimir();
fila.entrar("Noemia");
fila.imprimir();
console.log(fila.proximo());
console.log(fila.proximo());
console.log(fila.proximo());
console.log(fila.proximo());
fila.imprimir();
const novaFila = new Fila(1, 2, 3, 4, 5);
novaFila.imprimir();
class Mapa {
    constructor() {
        this.itens = new Array();
    }
    obter(chave) {
        const resultado = this.itens.find((item) => item.chave === chave);
        return resultado ? resultado : null;
    }
    colocar(mapa) {
        const encontrado = this.obter(mapa.chave);
        if (encontrado) {
            encontrado.valor = mapa.valor;
            return;
        }
        this.itens.push(mapa);
    }
    limpar() {
        this.itens = new Array();
    }
    imprimir() {
        console.log(this.itens);
    }
}
const mapa = new Mapa();
mapa.colocar({ chave: 1, valor: "Maria" });
mapa.colocar({ chave: 2, valor: "Felipe" });
mapa.colocar({ chave: 3, valor: "Pedro" });
mapa.colocar({ chave: 3, valor: "Ana" });
console.log(mapa.obter(2));
mapa.imprimir();
mapa.limpar();
mapa.imprimir();
//# sourceMappingURL=genericos.js.map