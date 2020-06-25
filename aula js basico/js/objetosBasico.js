const pessoa1 = {
    nome: 'Marvin',
    sobrenome: 'Mendes Lopes',
    idade: 27,

    fala() {
        console.log(`Olá! Meu nome é ${this.nome}  ${this.sobrenome}, e tenho ${this.idade} anos`);
        this.incrementaIdade();
    },
    incrementaIdade(){
        this.idade++;
    }

};

pessoa1.fala();
pessoa1.fala();
pessoa1.fala();
pessoa1.fala();






