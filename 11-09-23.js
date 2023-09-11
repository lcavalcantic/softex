/////////////////////////////////
const aluno = {
    nome: "Bento",
    idade: 9,
    saudacao: function(){
        let sobrenome = "Santiago";
        console.log("O nome é " + this.nome + " " + sobrenome + "!" + " " + this.nome + " tem " + this.idade + " anos!");
    },
};
aluno.saudacao();

///////////////////////////////

function aluno() {
    this.nome = prompt("Digite um nome: "),
    this.idade = idade,
    this.saudacao = function() {
        console.log('Olá!');
    }
}

const aluno1 = new aluno();
const aluno2 = new aluno();
console.log(aluno1.nome);
console.log(aluno2.nome);

////////////////////////////////

function aluno(nome_aluno, idade_aluno, genero_aluno) {
    this.nome = nome_aluno,
    this.idade = idade_aluno,
    this.genero = genero_aluno,
    this.saudacao = function() {
        return('Olá!' + this.nome);
    }
}

const aluno1 = new aluno('tubarão', 22, 'feminino');
const aluno2 = new aluno('ratão', 23, 'feminino');
console.log(aluno1.nome);
console.log(aluno2.nome);

