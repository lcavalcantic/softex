class Pessoa {
    constructor(nome, idade, filho = null) {
        this.nome = nome;
        this.idade = idade;
        this.filho = filho;
    }
}

class ListaEncadeada {
    constructor() {
        this.primeiro = null;
    }

    adicionarPessoa(nome, idade, filho = null) {
        const novaPessoa = new Pessoa(nome, idade, filho);
        if (!this.primeiro) {
            this.primeiro = novaPessoa;
        } else {
            let atual = this.primeiro;
            while (atual.filho) {
                atual = atual.filho;
            }
            atual.filho = novaPessoa;
        }
    }

    exibirPessoas() {
        let atual = this.primeiro;
        while (atual) {
            console.log(`Nome: ${atual.nome}, Idade: ${atual.idade}`);
            if (atual.filho) {
                console.log(`Filho de ${atual.nome}: ${atual.filho.nome}`);
            }
            console.log("-------------------------");
            atual = atual.filho;
        }
    }
}

 
const lista = new ListaEncadeada();
lista.adicionarPessoa("Bento", 30);
lista.adicionarPessoa("Marta", 28);
lista.adicionarPessoa("Pedro", 5, lista.primeiro);

lista.exibirPessoas();
