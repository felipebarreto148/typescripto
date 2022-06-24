interface Humano {
	nome: string;
}

function saudarComOla(pessoa: Humano) {
	console.log(`Olá ${pessoa.nome}`);
}

function mudarNome(pessoa: Humano) {
	pessoa.nome = "Maria Eduarda";
}

const pessoa: Humano = { nome: "Felipe", idade: 21 };

saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
