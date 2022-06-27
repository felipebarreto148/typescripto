function echo(objeto: any) {
	return objeto;
}

console.log(echo("Felipe").length);
console.log(echo(27));
console.log(echo({ nome: "Felipe", idade: 21 }));

// Usando Gerenics
function echoMelhorado<TIPO>(objeto: TIPO): TIPO {
	return objeto;
}

console.log(echoMelhorado("Felipe").length);
console.log(echoMelhorado<number>(27));
console.log(echoMelhorado({ nome: "Felipe", idade: 21 }));

// Generics disponíveis na API
const avaliacoes: Array<number> = [10, 9.3, 7.7];
avaliacoes.push(8.4);
// avaliacoes.push("9.8");
console.log(avaliacoes);

// Array
function imprimir<T>(args: T[]) {
	args.forEach((elemento) => console.log(elemento));
}

imprimir([1, 2, 3]);
imprimir<number>([1, 2, 3]);
imprimir<string>(["Felipe", "Maria Eduarda", "Luke"]);
imprimir<{ nome: string; idade: number }>([
	{ nome: "Felipe", idade: 21 },
	{ nome: "Maria Eduarda", idade: 21 },
	{ nome: "Luke", idade: 0.2 },
]);
type Aluno = { nome: string; idade: number };
imprimir<Aluno>([
	{ nome: "Felipe", idade: 21 },
	{ nome: "Maria Eduarda", idade: 21 },
	{ nome: "Luke", idade: 0.2 },
]);

// Tipo Genérico
type Echo = <T>(data: T) => T;
const chamarEcho: Echo = echoMelhorado;
console.log(chamarEcho<string>("Alguma coisa"));

// Class com Generics
abstract class OperacaoBinaria<T, R> {
	constructor(public operando1: T, public operando2: T) {}

	abstract executar(): R;
}

// console.log(new OperacaoBinaria('Bom', 'Dia').executar());
// console.log(new OperacaoBinaria(3, 7).executar());
// console.log(new OperacaoBinaria(3, 'Opa').executar());

class SomaBinaria extends OperacaoBinaria<number, number> {
	executar(): number {
		return this.operando1 + this.operando2;
	}
}

console.log(new SomaBinaria(3, 7).executar());

class DiferencaEntreDatas extends OperacaoBinaria<Data, string> {
	getTime(data: Data): number {
		let { dia, mes, ano } = data;
		return new Date(`${mes}/${dia}/${ano}`).getTime();
	}

	executar(): string {
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

class Fila<T extends number | string> {
	private fila: Array<T>;

	constructor(...args: T[]) {
		this.fila = args;
	}

	entrar(element: T) {
		this.fila.push(element);
	}

	proximo(): T | string {
		if (this.fila.length > 0 && this.fila[0]) {
			const primeiro = this.fila[0];
			this.fila.splice(0, 1);
			return primeiro;
		} else {
			return "Fila vazia";
		}
	}

	imprimir() {
		console.log(this.fila);
	}
}

const fila = new Fila<string>("Felipe", "Maria Eduarda", "Luke");
fila.imprimir();
fila.entrar("Noemia");
fila.imprimir();
console.log(fila.proximo());
console.log(fila.proximo());
console.log(fila.proximo());
console.log(fila.proximo());
fila.imprimir();

const novaFila = new Fila<number>(1, 2, 3, 4, 5);

novaFila.imprimir();

// const outraFila = new Fila<boolean>(true, false);

// Desafio Mapa
// Array de Obejtos (Chave/Valor) => itens
// Métodos: obter(chave), colocar({ C, V })
// limpar(), imprimir()

type mapa<T, R> = {
	chave: T;
	valor: R;
};
class Mapa<T, R> {
	private itens: Array<mapa<T, R>> = new Array<mapa<T, R>>();

	obter(chave: T): mapa<T, R> | null {
		const resultado = this.itens.find((item) => item.chave === chave);
		return resultado ? resultado : null;
	}

	colocar(mapa: mapa<T, R>): void {
		const encontrado = this.obter(mapa.chave);
		if (encontrado) {
			encontrado.valor = mapa.valor;
			return;
		}
		this.itens.push(mapa);
	}

	limpar(): void {
		this.itens = new Array<mapa<T, R>>();
	}

	imprimir(): void {
		console.log(this.itens);
	}
}

const mapa = new Mapa<number, string>();
mapa.colocar({ chave: 1, valor: "Maria" });
mapa.colocar({ chave: 2, valor: "Felipe" });
mapa.colocar({ chave: 3, valor: "Pedro" });
mapa.colocar({ chave: 3, valor: "Ana" });

console.log(mapa.obter(2));
mapa.imprimir();
mapa.limpar();
mapa.imprimir();
