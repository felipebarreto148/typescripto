function logarClasse(constructor: Function) {
	console.log(constructor);
}

function decoratorVazio(_: Function) { }

function logarClasseSe(valor: boolean) {
	return valor ? logarClasse : decoratorVazio;
}

function decorator(obj: { a: string, b?: number }) {
	return function (constructor: Function): void {
		console.log(obj.a, obj.b);
	};
}

type Construtor = { new(...args: any): {} }

function logarObjeto(construtor: Construtor) {
	console.log('Carregado....');

	return class extends construtor {
		constructor(...args: any[]) {
			console.log("Antes...");
			super(...args);
			console.log("Depois...");
		}
	}
}

/* new Eletrodomestico();
new Eletrodomestico();
new Eletrodomestico(); */

interface Eletrodomestico {
	imprimir?(): void;
}

// @logarClasse
// @decorator({ a: 'teste', b: 123 })
// @decorator({ a: 'teste'})
// @logarClasseSe(true)
@logarObjeto
@imprimivel
class Eletrodomestico {
	constructor() {
		console.log("novo...");
	}
}

function imprimivel(construtor: Function) {
	construtor.prototype.imprimir = function () {
		console.log(this);
	}
}

//(<any>new Eletrodomestico()).imprimir();
const eletro = new Eletrodomestico();
eletro.imprimir && eletro.imprimir();

/* Desafio Decorator perfilAdmin */

const usuarioLogado = {
	nome: "Felipe",
	email: "felipebarreto148@gmail.com",
	admin: true
}

@perfilAdmin
class MudancaAdministrativa {
	critico() {
		console.log('Algo crítico foi alterado!');
		
	}
}

function perfilAdmin<T extends Construtor>(construtor: T) {
	return class extends construtor {
		constructor(...args: any[]) {
			super(...args);
			if (!usuarioLogado || !usuarioLogado.admin) {
				throw new Error('Sem permissão!');
			}
		}
	}
}

new MudancaAdministrativa().critico();

class contaCorrente {
	@naoNegativo
	private saldo: number;

	constructor(saldo: number) {
		this.saldo = saldo;
	}
	@congelar
	sacar(valor: number) {
		if (valor <= this.saldo) {
			this.saldo -= valor;
			return true;
		}
		return false;
	}
	@congelar
	getSaldo() {
		return this.saldo
	}
}

const cc = new contaCorrente(6000);
cc.sacar(500);
console.log(cc.getSaldo());

/* cc.getSaldo = function () {
	return this['saldo'] + 1000;
} */
cc.sacar(7000);
console.log(cc.getSaldo());

// Object.freeze()
function congelar(alvo: any, nomeMetodo: string, descritor: PropertyDescriptor) {
	console.log(alvo);
	console.log(nomeMetodo);
	descritor.writable = false;
}

function naoNegativo(alvo: any, nomePropriedade: string) {
	delete alvo[nomePropriedade];
	Object.defineProperty(alvo, nomePropriedade, {
		get: function (): any {
			return alvo['_' + nomePropriedade];
		},
		set: function (valor: any): any {
			if (valor < 0) {
				throw new Error('Valor negativo!');
			} else {
				alvo['_' + nomePropriedade] = valor;
			}
		},
	})
}