// string
let nome: string = "Jõao";
console.log(nome);
// nome = 28

// number
let idade: number = 27;
// idade = 'Ana'
idade = 27.5;
console.log(idade);

// boolean
let possuiHobbies: boolean = false;
// possuiHobbies = 1
console.log(possuiHobbies);

// Tipos explicitos
let minhaIdade: number;
minhaIdade = 21;
console.log(typeof minhaIdade);
// minhaIdade = 'idade é 27';

// array
let hobbies: any[] = ["Cozinhar", "Praticar Esportes"];
console.log(hobbies[0]);
console.log(typeof hobbies);

hobbies = [100, 200, 300];
// hobbies = 100

console.log(hobbies);

// Tuplas
let endereco: [string, number, string] = ["Av Principal", 99, ""];
console.log(endereco);

endereco = ["Rua importante", 1260, "Bloco C"]