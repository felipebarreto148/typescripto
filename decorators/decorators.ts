// // @logarClasse
// @decorator("Teste", 123)
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

function decorator(a: string, b: number) {
	return function (constructor: Function): void {
		console.log(a, b);
	};
}
