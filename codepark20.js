function buscaBinaria(array, alvo) {
    let esquerda = 0;
    let direita = array.length - 1;

    while (esquerda <= direita) {
        const meio = Math.floor((esquerda + direita) / 2);
        const valorMeio = array[meio];

        if (valorMeio === alvo) {
            return meio; // Encontrou o valor na posição "meio"
        } else if (valorMeio < alvo) {
            esquerda = meio + 1; // Procura na metade direita
        } else {
            direita = meio - 1; // Procura na metade esquerda
        }
    }

    return -1; 
}

const array = [5, 7, 8, 10, 12, 15, 18, 20, 25, 30];
const alvo = 20;

const indiceEncontrado = buscaBinaria(array, alvo);

if (indiceEncontrado !== -1) {
    console.log(`O valor ${alvo} foi encontrado na posição ${indiceEncontrado}.`);
} else {
    console.log(`O valor ${alvo} não foi encontrado no array.`);
}
