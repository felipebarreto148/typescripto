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