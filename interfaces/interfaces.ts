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

// Usando Classes...
class Cliente implements Humano {
	nome: string = "";
	ultimaCompra: Date = new Date();
	saudar(sobrenome: string) {
		console.log(`Olá, meu nome é ${this.nome} ${sobrenome}`);
	}
}

const meuCliente = new Cliente();
meuCliente.nome = "Han";
saudarComOla(meuCliente);
meuCliente.saudar("Solo");
console.log(meuCliente.ultimaCompra);

// Interface Função
interface FuncaoCalculo {
	(a: number, b: number): number;
}

let potencia: FuncaoCalculo;
potencia = (base: number, exp: number): number => base ** exp;

console.log(potencia(3, 10));
