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
