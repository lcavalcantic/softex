algoritmo "nomeTransporte"
var
   umap, pesado, pedal, capacete, meioT: caractere
inicio
      escreval("Só comporta uma pessoa?[S/N]")
      leia(umap)
      escolha umap
      caso "S"
      
      escreval("É pesado?[S/N]")
      leia(pesado)
      se pesado = "S" entao
      meioT <- "Trator"
      senao
      escreval("possui pedal?[S/N]")
      leia(pedal)
      se pedal = "S"
      meioT <- "Bicicleta"
      fimse
      fimse
      
      caso "N"
      escreval("É obrigatório o uso de capacete?[S/N]")
      leia(capacete)
      se capacete = "S" entao
      meioT <- "Moto"
      senao
      escreval("Meio de transporte não identificado")
      fimse
      fimescolha
      escreval("O meio de transporte é: ", meioT ,"!")
      
fimalgoritmo
