const estudante = 'caroline';
const docente = "Ana";
const cumprimento = "Nosso lema é 'Estudar bastante!'";
const citacao = `Ju diz: "Nosso lema é 'Estudar bastante!'"`;

console.log(cumprimento);
console.log(citacao);

console.log('A estudante se chama ' + estudante);

//template string

console.log(`A estudante se chama ${estudante}`);

//funções para teste

const senha = 'SenhaSegura123' + estudante.toUpperCase();
console.log(senha);