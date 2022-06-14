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

calculo = multiplicar
console.log(calculo(5, 6));

// objeto
let usuario: { nome: string, idade: number } = {
    nome: "Felipe",
    idade: 21
}

// Union Types
let nota: number | string = 10;
console.log(`Minha nota e ${nota}`);
nota = "10"
console.log(`Minha nota e ${nota}`);
