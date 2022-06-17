"use strict";
// string
let nome = "Felipe";
console.log(nome);
// nome = 28
// number
let idade = 27;
// idade = 'Ana'
idade = 27.5;
console.log(idade);
// boolean
let possuiHobbies = false;
// possuiHobbies = 1
console.log(possuiHobbies);
// Tipos explicitos
let minhaIdade;
minhaIdade = 21;
console.log(typeof minhaIdade);
// minhaIdade = 'idade é 27';
// array
let hobbies = ["Cozinhar", "Praticar Esportes"];
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [100, 200, 300];
// hobbies = 100
console.log(hobbies);
// Tuplas
let endereco = ["Av Principal", 99, ""];
console.log(endereco);
endereco = ["Rua importante", 1260, "Bloco C"];
console.log(endereco);
// enums
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 2] = "Azul";
    Cor[Cor["Laranja"] = 3] = "Laranja";
    Cor[Cor["Amarelo"] = 4] = "Amarelo";
    Cor[Cor["Vermelho"] = 100] = "Vermelho";
})(Cor || (Cor = {}));
let minhaCor = Cor.Verde;
console.log(minhaCor);
console.log(Cor.Azul);
console.log(Cor.Laranja, Cor.Amarelo);
console.log(Cor.Verde, Cor.Vermelho);
// any
let carro = "BMW";
console.log(carro);
carro = { marca: "BMW", ano: 2022 };
console.log(carro);
// funções
function retornaMeuNome() {
    //Define o retorno da funcao
    // return minhaIdade
    return nome;
}
console.log(retornaMeuNome());
function digaOi() {
    console.log("oi");
    // return minhaIdade
}
digaOi();
function multiplicar(a, b) {
    return a * b;
}
// console.log(multiplicar(1, 'Felipe'));
console.log(multiplicar(1, 2));
// tipo function
let calculo;
// calculo = digaOi
// calculo()
calculo = multiplicar;
console.log(calculo(5, 6));
// objeto
let usuario = {
    nome: "Felipe",
    idade: 21,
};
// Union Types
let nota = 10;
console.log(`Minha nota e ${nota}`);
nota = "10";
console.log(`Minha nota e ${nota}`);
// Checando tipos
let valor = 30;
if (typeof valor === "number") {
    console.log("É um number!");
}
else {
    console.log(typeof valor);
}
// never
function falha(msg) {
    //Nunca chega no final da função de forma bem sucedida
    // while (true) {}
    throw new Error(msg);
}
const produto = {
    nome: "Sabão",
    preco: 4,
    validarProduto() {
        if (!this.nome || !this.nome.trim().length) {
            falha("Precisa ter um nome!");
        }
        if (this.preco <= 0) {
            falha("Preço inválido!");
        }
    },
};
produto.validarProduto();
// null
let altura = 12;
let alturaOpcional = 12;
alturaOpcional = null;
const contato1 = {
    nome: "Felipe",
    tel1: "2199999-9999",
    tel2: null,
};
console.log(contato1);
let contaBancaria = {
    saldo: 3456,
    depositar(valor) {
        this.saldo += valor;
    },
};
let correntista = {
    nome: "Ana Silva",
    contaBancaria,
    contatos: ["34567890", "98765432"],
};
correntista.contaBancaria.depositar(3000);
console.log(correntista);
//# sourceMappingURL=tipos.js.map