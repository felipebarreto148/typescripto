"use strict";
// Desafio
/**
 * Criar um objeto funcionario com:
 *  - Array de strings com os nomes dos supervisores
 *  - Função de bater ponto que recebe a hora (número) e retorna uma string
 *      -> Ponto normal (<= 8)
 *      -> Fora do horário (> 8)
 */
function bater_ponto(horario) {
    if (horario <= 8) {
        return "Ponto normal";
    }
    return "Fora do horário";
}
const funcionario = {
    supervisores: ["Felipe", "Maria Eduarda"],
    bater_ponto,
};
console.log(funcionario.supervisores);
console.log(funcionario.bater_ponto(8));
console.log(funcionario.bater_ponto(9));
