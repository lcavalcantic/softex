
//Métodos de classe Javascript
class aluno {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    saudacao(){
        console.log(`Olá ${this.nome}`);
    }
}
const aluno1 = new aluno("Bento", 12);
const aluno2 = new aluno("Maria", 8);

console.log(aluno1);
aluno1.saudacao();
console.log(aluno2);
aluno2.saudacao();

//Métodos Getters e Setters

class aluno {
    constructor(nome, idade) {
        this.nome = nome;
    }
    get nomeAluno(){
        return this.nome;
    }
    set nomeAluno(x){
        this.nome = x;
    }
}
const aluno1 = new aluno("Bento");
console.log(aluno1);
aluno1.nomeAluno = "Maria"
console.log(aluno1.nome);

//Palavra-chave "super"

class pessoa {
    constructor(nome, idade) {
        this.nome = nome;
    }
    saudacao(){
        console.log('Olá', this.nome);
    }
}

class aluno extends pessoa {
    constructor(nome) {
        console.log('Criando turma de alunos:');
        super(nome);
    }
}

let pessoa1 = new pessoa ('Bento');
console.log(pessoa1.nome);
pessoa1.saudacao();
let aluno1 = new aluno ('Sofia');
console.log(aluno1.nome);
aluno1.saudacao();
let aluno2 = new aluno ('Froid');
console.log(aluno2.nome);
aluno2.saudacao();
