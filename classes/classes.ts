console.log("%cClasses", style);

class Data {
	// Public per default
	dia: number;
	public mes: number;
	ano: number;

	constructor(dia: number = 1, mes: number = 1, ano: number = 1970) {
		this.dia = dia;
		this.mes = mes;
		this.ano = ano;
	}
}

const aniversario = new Data(23, 3, 2001);
aniversario.dia = 4;
console.log(aniversario.dia);
console.log(aniversario);

const casamento = new Data();
casamento.ano = 2022;
console.log(casamento);

class DataEsperta {
	constructor(
		public dia: number = 1,
		public mes: number = 1,
		public ano: number = 1970
	) {}
}

const aniversarioEsperto = new DataEsperta(23, 3, 2001);
aniversarioEsperto.dia = 4;
console.log(aniversarioEsperto.dia);
console.log(aniversarioEsperto);

const casamentoEsperto = new DataEsperta();
casamentoEsperto.ano = 2022;
console.log(casamentoEsperto);
