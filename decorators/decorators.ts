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

// @logarClasse
// @decorator({ a: 'teste', b: 123 })
// @decorator({ a: 'teste'})
// @logarClasseSe(true)
@logarObjeto
class Eletrodomestico {
	constructor() {
		console.log("novo...");
	}
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

new Eletrodomestico();
new Eletrodomestico();
new Eletrodomestico();