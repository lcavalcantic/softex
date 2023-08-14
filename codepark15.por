algoritmo "codepark15"
var
 candidatoX, candidatoY, candidatoZ, branco, nulo, voto: inteiro
inicio
candidatoX <- 0
candidatoY <- 0
candidatoZ <- 0
branco <- 0
nulo <- 0

escreval("Simulação de Eleição")
escreval("CandidatoX => 889")
escreval("CandidatoY => 847")
escreval("CandidatoZ => 515")
escreval("Branco => 0")

repita
    escreva("Digite o número do candidato que deseja votar (ou 0 para branco, -1 para finalizar): ")
    leia(voto)

    se voto = 889 entao
        candidatoX <- candidatoX + 1
    senao se voto = 847 entao
        candidatoY <- candidatoY + 1
    senao se voto = 515 entao
        candidatoZ <- candidatoZ + 1
    senao se voto = 0 entao
        branco <- branco + 1
    senao
        nulo <- nulo + 1
        escreva("Voto nulo. Por favor, vote novamente.")
    fimse
ate voto = -1

escreval("Eleição finalizada.")
escreval("Votos CandidatoX: ", candidatoX)
escreval("Votos CandidatoY: ", candidatoY)
escreval("Votos CandidatoZ: ", candidatoZ)
escreval("Votos em Branco: ", branco)
escreval("Votos Nulos: ", nulo)

se candidatoX > candidatoY e candidatoX > candidatoZ entao
    escreval("Vencedor: CandidatoX")
senao se candidatoY > candidatoX e candidatoY > candidatoZ entao
    escreval("Vencedor: CandidatoY")
senao se candidatoZ > candidatoX e candidatoZ > candidatoY entao
    escreval("Vencedor: CandidatoZ")
senao
    escreval("Houve empate entre os candidatos.")
fimse
fimalgoritmo
