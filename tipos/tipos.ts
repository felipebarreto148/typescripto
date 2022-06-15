// string
let nome: string = "Felipe";
console.log(nome);
// nome = 28

// number
let idade: number = 27;
// idade = 'Ana'
idade = 27.5;
console.log(idade);

// boolean
let possuiHobbies: boolean = false;
// possuiHobbies = 1
console.log(possuiHobbies);

// Tipos explicitos
let minhaIdade: number;
minhaIdade = 21;
console.log(typeof minhaIdade);
// minhaIdade = 'idade é 27';

// array
let hobbies: any[] = ["Cozinhar", "Praticar Esportes"];
console.log(hobbies[0]);
console.log(typeof hobbies);

hobbies = [100, 200, 300];
// hobbies = 100

console.log(hobbies);

// Tuplas
let endereco: [string, number, string] = ["Av Principal", 99, ""];
console.log(endereco);

endereco = ["Rua importante", 1260, "Bloco C"];
console.log(endereco);

// enums
enum Cor {
	Cinza, // 0
	Verde = 100, // 100
	Azul = 2, // 2
	Laranja, // 3
	Amarelo, // 4
	Vermelho = 100, // 100
}

let minhaCor: Cor = Cor.Verde;
console.log(minhaCor);

console.log(Cor.Azul);
console.log(Cor.Laranja, Cor.Amarelo);
console.log(Cor.Verde, Cor.Vermelho);

// any
let carro: any = "BMW";
console.log(carro);
carro = { marca: "BMW", ano: 2022 };
console.log(carro);

// funções
function retornaMeuNome(): string {
	//Define o retorno da funcao
	// return minhaIdade
	return nome;
}

console.log(retornaMeuNome());

function digaOi(): void {
	console.log("oi");
	// return minhaIdade
}

digaOi();

function multiplicar(a: number, b: number): number {
	return a * b;
}
// console.log(multiplicar(1, 'Felipe'));
console.log(multiplicar(1, 2));

// tipo function
let calculo: (a: number, b: number) => number;
// calculo = digaOi
// calculo()

calculo = multiplicar;
console.log(calculo(5, 6));

// objeto
let usuario: { nome: string; idade: number } = {
	nome: "Felipe",
	idade: 21,
};

// Union Types
let nota: number | string = 10;
console.log(`Minha nota e ${nota}`);
nota = "10";
console.log(`Minha nota e ${nota}`);

// Checando tipos
let valor = 30;

if (typeof valor === "number") {
	console.log("É um number!");
} else {
	console.log(typeof valor);
}

// never
function falha(msg: string): never {
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
let alturaOpcional: null | number = 12;
alturaOpcional = null;

type Contato = {
	nome: string;
	tel1: string;
	tel2: string | null;
};

const contato1 = {
	nome: "Felipe",
	tel1: "2199999-9999",
	tel2: null,
};

console.log(contato1);

// Desafio: Transformar o codigo abaixo em TS

let contaBancaria = {
	saldo: 3456,
	depositar(valor) {
		this.saldo += valor;
	},
};

let correntista = {
	nome: "Ana Silva",
	contaBancaria,
	contatos: ["34567890", 98765432],
};

correntista.contaBancaria.depositar(3000);
console.log(correntista);
