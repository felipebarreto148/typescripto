// // @logarClasse
//@decorator({ a: 'teste', b: 123 })
//@decorator({ a: 'teste'})
@logarClasseSe(true)
class Eletrodomestico {
	constructor() {
		console.log("novo...");
	}
}

function logarClasse(constructor: Function) {
	console.log(constructor);
}

function decoratorVazio(_: Function) {}

function logarClasseSe(valor: boolean) {
	return valor ? logarClasse : decoratorVazio;
}

function decorator(obj: { a: string, b?: number }) {
	return function (constructor: Function): void {	
		console.log(obj.a, obj.b);
	};
}
