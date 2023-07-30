const numero = parseInt(prompt("Digite um número para ver a sua tabuada:"));;
if (!isNaN(numero)) {
  // Exibe a tabuada do número digitado
  console.log(`Tabuada do número ${numero}:`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
} else {
  console.log("Número inválido. Digite um número válido.");
}
