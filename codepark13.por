algoritmo "codepark13"
var
 opcao: caractere
 num1, num2, resultado: real
inicio
repita
    escreval("Operações disponíveis:")
    escreval("1: Soma")
    escreval("2: Subtração")
    escreval("3: Multiplicação")
    escreval("4: Divisão")
    escreval("0: Sair")

    escreva("Digite o número para a operação desejada: ")
    leia(opcao)
    se opcao = "0" entao
        escreva("Saindo da calculadora.")
    senao se opcao = 1 ou opcao = 2 ou opcao = 3 ou opcao = 4 entao
    escreva("Digite o primeiro valor: ")
        leia(num1)
        escreva("Digite o segundo valor: ")
        leia(num2)
        
            se opcao = "1" entao
            resultado <- num1 + num2
            escreval("Resultado da Soma: ", resultado)
        senao se opcao = "2" entao
            resultado <- num1 - num2
            escreval("Resultado da Subtração: ", resultado)
        senao se opcao = "3" entao
            resultado <- num1 * num2
            escreval("Resultado da Multiplicação: ", resultado)
        senao se opcao = "4" entao
            resultado <- num1/num2
            escreval("Resultado da Divisão: ", resultado)
      fimse
    fimse
ate opcao = "0"
fimalgoritmo
