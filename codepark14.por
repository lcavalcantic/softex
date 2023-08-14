algoritmo "codepark14"
var
    nome: caractere
    idade, ano: inteiro
inicio
repita
      escreva("Digite o ano de nascimento (entre 1922 e 2021): ")
      leia(ano)
      se ano < 1922 ou ano > 2021 entao
       escreva("Ano de nascimento inválido. Tente novamente.")
      escreva("Digite seu nome completo: ")
      leia(nome)
      idade <- 2022 - ano

    escreval("Nome: ", nome)
    escreval("Idade em 2022: ", idade, " anos")
ate ano >= 1922 e ano <= 2021
    fimse

fimalgoritmo
