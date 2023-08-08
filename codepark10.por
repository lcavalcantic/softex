algoritmo "codepark10"
var
qtdRodas, peso, qtdPessoas: Inteiro
inicio
   escreval("Informe a quantidade de rodas do veículo: ")
   leia(qtdRodas)
   escreval("Informe o peso bruto do veículo em kg: ")
   leia(peso)
   escreval("Informe a quantidade de pessoas no veículo: ")
   leia(qtdPessoas)
   se qtdRodas >= 2 e qtdRodas <= 3 entao
      escreval("Categoria de habilitação necessária: A")
   senao se qtdRodas = 4 e qtdPessoas <= 8 e peso <= 3500 entao
      escreval("Categoria de habilitação necessária: B")
   senao se qtdRodas >= 4 e qtdPessoas > 8 entao
      escreval("Categoria de habilitação necessária: D")
   senao se qtdRodas >= 4 e peso > 6000 entao
      escreval("Categoria de habilitação necessária: E")
   senao se qtdRodas >= 4 e peso >= 3500 e peso <= 6000 entao
      escreval("Categoria de habilitação necessária: C")
   senao
      escreval("Não foi possível determinar a categoria de habilitação.")
   fimse

fimalgoritmo
