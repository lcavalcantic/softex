Algoritmo "contagembomba"

Var
segundos: inteiro


Inicio

    escreva("Informe o número de segundos para a explosão: ")
    leia(segundos)
    escreva("Iniciando contagem regressiva...")

    enquanto segundos >= 0 faca
        escreval(segundos, " segundos")
        segundos <- segundos - 1
    fimEnquanto
    escreva("BUM!")

Fimalgoritmo
