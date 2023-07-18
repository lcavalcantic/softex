let idade = 30;
let salario = 4568.32;
let nome = "leticia";
let estaSol = true;

console.log(typeof idade);
console.log(typeof salario);
console.log(typeof nome);
console.log(typeof estaSol);


let preco = 19.9;
let desconto = 0.4;
let precoDesconto = preco * (1 - desconto);

console.log(precoDesconto);

let nomeProduto = "caderno";
let categoria = "papelaria";

console.log(`Produto - ${nomeProduto}, Categoria - ${categoria} 
Preço do produto - R$${preco}, Desconto - ${desconto}% => Total: R$${precoDesconto}`);

//

calculando

let v1 = 10;
let v2 = 2;

let soma = v1 + v2;
let div = v1/v2;
let sub = v1 - v2;
let mult = v1 * v2;

console.log(`Resultado da soma = ${soma}`)
console.log(`Resultado da divisão = ${div}`)
console.log(`Resultado da subtração = ${sub}`)
console.log(`Resultado da multiplicação = ${mult}`)

//


desconto Ipad

const produto = {
    nome: 'ipad',
    preco: 5600,
    desconto: 0.15,
    precoComDesconto: function() {
        //this => equivalente a falar produto.preco, se refere ao objeto
        return this.preco * (1 - this.desconto);
    }
};

console.log(`Valor final do produto: ${produto.nome} R$${produto.precoComDesconto()}.`);


//

//Criar uma calculadora simples

let A = 2
let B = 5
let linha = "-----------"

console.log(linha)
console.log("Calculadora");
console.log(linha)
console.log(`Soma: ${A+B}`);
console.log(`Subtração: ${A-B}`);
console.log(`Multiplicação: ${A*B}`);
console.log(`Divisão: ${A/B}`);
//---------------------------------------------------------
const produto = {
    nome: 'Ipad',
    preco: 5600,
    desconto: 0.15,
    precoComDesconto:function(){
/*this -> e equivalente a falar produto.preco, se refere ao o objeto.*/
        return this.preco * (1 - this.desconto);
    }
};

console.log(`Valor final do produto: ${produto.nome} R$${produto.precoComDesconto()}`);
//----------------------------------------------------------------
const data ={
    dia: 1,
    mes:10,
    ano:2022
};

//alterar o valor de um atributo dentro de objeto
data.dia = 27;
data.mes = 12;

console.log(`A data atual: ${data.dia}/${data.mes}/${data.ano}`);
}

//-----------------------------
let a = 0
let b = 0

let linha = ('--------------------')

const calculadora ={
    soma: a+b,
    subtracao:a-b,
    multiplicacao:a*b,
    divisao: a/b
};

//alterar o valor de um atributo dentro de objeto

console.log(linha)
console.log("Calculadora")
console.log(linha)
console.log(` Soma: ${calculadora.soma = 2 + 2}\n Subtração ${calculadora.subtracao = 2 - 2} \n Multiplicação:${calculadora.multiplicacao = 2*2} \n Divisão:${calculadora.divisao = 3/4}`);
