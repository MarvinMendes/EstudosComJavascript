const nome = 'Luiz otávio'
const sobreNome = ' Miranda'
const idade = 30
const peso = 84
const altura = 1.80
let anoAtual = 2020;
let anoNascimento = anoAtual - idade;
let imc = peso / (altura * altura)
//template strings
console.log(`${nome} ${sobreNome} tem  ${idade} anos pesa ${peso}kg`);
console.log(`tem  ${altura} de altura e seu IMC é de  ${imc}`);
console.log(`${nome}  nasceu em  ${anoNascimento}`);

