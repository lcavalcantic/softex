CRIANDO CALCULADORA IMC
    console.log("Calculadora IMC");
    
    var peso = parseFloat(prompt('Digite seu peso(kg): '));
    var altura = parseFloat(prompt('Digite sua altura(metros): '));
    
    var imc = peso / (altura * altura);
    alert('Seu IMC é: ' + imc.toFixed(2));
    
    if (imc < 18.5) {
        console.log("Abaixo do peso");
    } else if (imc < 24.9) {
        console.log("Peso ideal"); 
    } else if (imc < 29.9) {
        console.log("Sobrepeso");
    } else if (imc < 34.9) {
        console.log("Obesidade grau 1");
    } else if (imc < 39.9) {
        console.log("Obesidade grau 2");
    } else { 
        console.log("Obesidade mórbida");
    }

//CRIANDO CALCULADORA COM SWITCH CASE
console.log('CALCULADORA')

let resultado;

let operador = prompt('Deseja {Escolha +, -, * ou /}');

let num1 = parseFloat(prompt('Digite o primeiro valor: '));
let num2 = parseFloat(prompt('Digite o segundo valor: '));

switch (operador){
    case '+':
        resultado = num1 + num2;
        console.log(`${num1} + ${num2} = ${resultado}`);
        break;
        
    case '-':
        resultado = num1 - num2;
        console.log(`${num1} - ${num2} = ${resultado}`);
        break;
    
    case '*':
        resultado = num1 * num2;
        console.log(`${num1} * ${num2} = ${resultado}`);
        break;
        
    case '/':
        resultado = num1 / num2;
        console.log(`${num1} / ${num2} = ${resultado}`);
        break;
        
        default:
        console.log('Opção inválida');
        break;
}
