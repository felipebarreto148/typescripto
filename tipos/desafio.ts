// Desafio
/**
 * Criar um objeto funcionario com:
 *  - Array de strings com os nomes dos supervisores
 *  - Função de bater ponto que recebe a hora (número) e retorna uma string
 *      -> Ponto normal (<= 8)
 *      -> Fora do horário (> 8)
 */

interface Funcionario {
	supervisores: string[];
	bater_ponto: (horario: number) => string;
}

function bater_ponto(horario: number): string {
	if (horario <= 8) {
		return "Ponto normal";
	}
	return "Fora do horário";
}

const funcionario: Funcionario = {
	supervisores: ["Felipe", "Maria Eduarda"],
	bater_ponto,
};

console.log(funcionario.supervisores);
console.log(funcionario.bater_ponto(8));
console.log(funcionario.bater_ponto(9));
