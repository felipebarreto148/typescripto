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
type Echo = <T>(data: T) => T
const chamarEcho: Echo = echoMelhorado
console.log(chamarEcho<string>("Alguma coisa"));
