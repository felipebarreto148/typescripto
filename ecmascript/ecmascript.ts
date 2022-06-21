let style =
	"background: white; color: black; padding: 10px; border-radius: 8px;";
// let & const
console.log("%clet & const", style);
let seraQuePode = "?";
console.log(seraQuePode);

let estafrio = true;
if (estafrio) {
	let acao = "Colocar o casaco!";
	console.log(acao);
}

const cpf: string = "123.456.789-99";
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

const somar = function (n1: number, n2: number): number {
	return n1 + n2;
};
console.log(somar(2, 2));

const subtrair = (n1: number, n2: number): number => n1 - n2;
console.log(subtrair(10, 2));

const saudacao = () => console.log("ola!");
saudacao();

const falarCom = (pessoa: string) => console.log("ola " + pessoa);
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

function contagemRegressiva(
	inicio: number = 5,
	fim: number = inicio - 5
): void {
	console.log(inicio);
	while (inicio > fim) {
		inicio--;
		console.log(inicio);
	}
	console.log("Fim!");
}
contagemRegressiva();
contagemRegressiva(3);

// Rest & Spread
console.log("%cRest & Spread", style);

const numbers = [1, 10, 99, -5, 200, 19000];
console.log(Math.max(...numbers));

const turmaA: string[] = ["João", "Maria", "Fernanda"];
const turmaB: string[] = ["Fernando", "Miguel", "Lorena", ...turmaA];
console.log(turmaB);

function retornarArray(...args: number[]): number[] {
	return args;
}
const numeros = retornarArray(1, 2, 3, 4, 5);
console.log(numeros);
console.log(retornarArray(...numbers));

// Rest & Spread (Tupla)
console.log("%cRest & Spread (Tupla)", style);
const tupla: [number, string, boolean] = [1, "abc", false];

function tuplaParam1(a: number, b: string, c: boolean): void {
	console.log(`1) ${a} ${b} ${c}`);
}
tuplaParam1(...tupla);

function tuplaParam2(...params: [number, string, boolean]): void {
	// console.log(Array.isArray(params));
	console.log(`2) ${params[0]} ${params[1]} ${params[2]}`);
}
tuplaParam2(...tupla);

// Destructuring (array)
console.log("%cDestructuring (array)", style);

const caracteristicas = ["Motor Zetec 1.8", 2020];
// const motor = caracteristicas[0];
// const ano = caracteristicas[1];

const [motor, ano] = caracteristicas;
console.log(motor);
console.log(ano);

// Destructuring (object)
console.log("%cDestructuring (object)", style);

const item = {
	nome: "SSD 480GB",
	preco: 200,
	caracteristicas: {
		w: "Importado",
	},
};
// const nomeItem = item.nome;
// const precoItem = item.preco;

const {
	nome: n,
	preco,
	caracteristicas: { w },
} = item;
console.log(n);
console.log(w);
console.log(preco);

// Template string
console.log("%cTemplate string", style);

const usuarioID: string = "user_123";
const notificacoes: string = "19";

const boasVindas = `Bem vindo ${usuarioID}, você tem ${
	parseInt(notificacoes) > 9 ? "+9" : notificacoes
} notificações.`;

console.log(boasVindas);

// Desafio
console.log("%cDesafio", style);

const dobro = (valor: number): number => valor * 2;
console.log(dobro(10));

const dizerOla = (nome: string = "Pessoa"): void => console.log(`Olá, ${nome}`);
dizerOla();
dizerOla("Anna");

const nums = [-3, 33, 38, 5];
console.log(Math.min(...nums));

const array = [55, 20, ...nums];
console.log(array);

const notas = [8.5, 6.3, 9.4];
const [nota1, nota2, nota3] = notas;
console.log(nota1, nota2, nota3);

const cientista = { primeiroNome: "Will", experiencia: 12 };
const { primeiroNome, experiencia } = cientista;
console.log(primeiroNome, experiencia);

// Promises
console.log("%cPromises", style);

// Callback
function esperar3s(callback: (dado: string) => void): void {
	setTimeout(() => {
		callback("3s depois...");
	}, 3000);
}

// esperar3s(function (resultado) {
// 	console.log(resultado);
// });

function esperar3sPromise() {
	return new Promise((resolve: any) => {
		setTimeout(() => {
			resolve("3s depois promise...");
		}, 3000);
	});
}

// esperar3sPromise().then((dado) => console.log(dado));

fetch("https://swapi.dev/api/people/1")
	.then((res) => res.json())
	.then((personagem) => personagem.films)
	.then((films) => fetch(films[0]))
	.then((resFilm) => resFilm.json())
	.then((filme) => console.log(filme.title))
	.catch((err) => console.log("Erro:" + err));
