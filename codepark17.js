// criando a matriz bidimensional com informações dos animais
var animais = [
    ["Gato", "Felino", 5],
    ["Elefante", "Mamífero", 10],
    ["Girafa", "Mamífero", 7],
    ["Tigre", "Felino", 3]
];

// função que exibe as informações dos animais
function exibirInformacoesAnimais(animais) {
    console.log("Nome\t\tEspécie\t\tIdade");
    console.log("----------------------------------");
    for (var i = 0; i < animais.length; i++) {
        console.log(animais[i][0] + "\t\t" + animais[i][1] + "\t\t" + animais[i][2]);
    }
