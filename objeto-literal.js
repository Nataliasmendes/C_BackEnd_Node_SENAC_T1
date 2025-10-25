//Objeto
let pessoa = {
    nome: "Cleiton",
    dataNasc: new Date(1997, 12, 2, 7, 30).toLocaleString("pt-BR"),
    altura: 1.73,
    peso: 87,
    senha: "123a",
    idade: 28,

    //maiorDeIdade: function(){},
    maiorDeIdade(){
        return this.idade >= 18;
    },
    apresentar(){
        //interpolação
        return `Olá, eu me chamo ${this.nome}. Minha idade é ${this.idade}`
    }
};

console.log(pessoa);
console.log(pessoa.maiorDeIdade());
console.log(pessoa.apresentar());




