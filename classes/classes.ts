console.log("%cClasses", style);

class Data {
	// Public per default
	dia: number;
	public mes: number;
	ano: number;

	constructor(dia: number = 1, mes: number = 1, ano: number = 1970) {
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
	constructor(
		public dia: number = 1,
		public mes: number = 1,
		public ano: number = 1970
	) {}
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
	constructor(
		public nome: string,
		public preco: number,
		public desconto: number = 0
	) {}

	// Criar método: precoComDesconto
	// Quais sao os parametros e o retorno?
	// Alterar metodo resumo para mostrar o preco com desconto

	public precoComDesconto(): number {
		return this.preco * (1 - this.desconto);
	}

	public resumo(): string {
		return `${this.nome} custa R$ ${this.precoComDesconto()} com desconto de ${
			this.desconto * 100
		}%`;
	}
}

const produto1 = new Produto("Notebook", 2999.9, 0.15);
console.log(produto1.resumo());

const produto2 = new Produto("iPad Pro", 1199.9);
console.log(produto2.resumo());

class Carro {
	private velocidadeAtual: number = 0;

	constructor(
		public marca: string,
		public modelo: string,
		private velocidadeMaxima: number = 200
	) {}

	private alterarVelocidade(delta: number): number {
		const novaVelocidade = this.velocidadeAtual + delta;
		if (novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima) {
			this.velocidadeAtual = novaVelocidade;
		} else {
			this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
		}
		return this.velocidadeAtual;
	}

	public acelerar(): number {
		return this.alterarVelocidade(5);
	}

	public frear(): number {
		return this.alterarVelocidade(-5);
	}
}

const carro1 = new Carro("Ford", "Ka", 185);
Array(50)
	.fill(0)
	.forEach(() => carro1.acelerar());
console.log(carro1.acelerar());
Array(40)
	.fill(0)
	.forEach(() => carro1.frear());
console.log(carro1.frear());

// Simular "Erros"
// carro1.velocidadeAtual = 300;
// console.log("Velocidade: ", carro1.velocidadeAtual);

// carro1.velocidadeMaxima = 500;
// console.log("Velocidade Maxima: ", carro1.velocidadeMaxima);

// carro1.alterarVelocidade(150);
// console.log("Velocidade: ", carro1.velocidadeAtual);
