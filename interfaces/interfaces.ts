interface Humano {
	nome: string;
	idade?: number;
	[prop: string]: any;
	saudar(sobrenome: string): void;
}

function saudarComOla(pessoa: Humano) {
	console.log(`Olá ${pessoa.nome}`);
}

function mudarNome(pessoa: Humano) {
	pessoa.nome = "Luke";
}

const pessoa: Humano = {
	nome: "Felipe",
	idade: 21,
	saudar(sobrenome: string) {
		console.log(`Olá, meu nome é ${this.nome} ${sobrenome}`);
	},
};

saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
// saudarComOla({ nome: "Teste", idade: 21, altura: 1.82 });
pessoa.saudar("Scãowalker");
