const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Avenida Brasil',
        numero: '1000'
    }
};

//atribuição via desestruturação
//const { nome, sobrenome, idade } = pessoa;
const { nome, ...resto} = pessoa;
console.log(nome, resto);
//console.log(nome, sobrenome + ", idade: " + idade );