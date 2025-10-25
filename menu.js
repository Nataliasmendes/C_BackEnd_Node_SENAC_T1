//instalado a biblio que permite entrada de dados:
import PromptSync from "prompt-sync";

//aciona a função da biblio:
let prompt = PromptSync();



//class é um modelo de algo(objeto)
//ctor > gera o constructor com o corpo
//constructor > constrói mais de 1 objeto
class Pessoa{
    /*
    Para por os valores de cada obj, colocamos via parametro
    Dentro do corpo ficam os atributos, dentro do parâmetro fica o valor
    Boa prática: para atributos camelCase. Para classe PascalCase
     */

    //atributo privado
    #senha;

    constructor(nome, idade, dataNasc, senha, palavraChave) {
        this.nome = nome
        this.idade = idade
        this.dataNasc = new Date(dataNasc).toLocaleString("pt-BR")
        this.#senha = senha
        this.palavraChave = palavraChave
    }

    apresentar(){
        console.log(`Olá, me chamo ${this.nome}, tenho ${this.idade} anos`);
    }

    get senha(){
        //chamar a função verSenha. Verificar se é verdadeira, se for mostra a senha. Se não, não mostra a senha.

        const palavraChave = prompt("Para ver a sua senha, você precisa digitar a palavra chave: ")

        if (this.palavraChave == palavraChave) {
            console.log(this.#senha);
            return this.#senha;
        } else {
            return  "Foi mal, amigão. Tente novamente.";
        }
}
}

let nomePessoa = prompt("Digite o seu nome: ");
let idadePessoa = parseInt(prompt("Digite a sua idade: "));
let dataNascPessoa = prompt("Digite a sua data de nascimento no formato aaaa/mm/dd: ");
let senhaPessoa = prompt("Digite sua senha: ");
let palavraChave = prompt("Digite a palavra-chave, caso um dia queira ver sua senha: ")

//instanciando o objeto - instanciar objeto:
const novaPessoa = new Pessoa(nomePessoa, idadePessoa, dataNascPessoa, senhaPessoa, palavraChave);

//aciona a função do objeto já criado
novaPessoa.apresentar();
novaPessoa.senha

//exibir todo o objeto
console.log(novaPessoa);

//Pilar Encapsulamento - segurança/guardar a informação
