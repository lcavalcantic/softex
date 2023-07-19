PORTUGOL (via PortugolWebStudio - gadelha)

1 - CONTADOR DE NUMEROS PARES
programa {
    
	funcao inicio() {
	   inteiro num=1, cont=0
	   //num(numero), cont(contador)
    
	   para(cont=1; cont<=100; cont++){
	   se(num%2==0)
	       escreva("\t\t: São números pares de 100\n", num)
	       num++
	       //cont++(contando de 1 em 1), num++(contando os num pares), \t=(espaçamento), \n(quebra de linha)     
	   }
	}
}



2 - TABUADA MULT

programa {
    
	funcao inicio() {

//tabuada de mult

inteiro x=1, num
para(num=0;num<=10;num++)
    escreva(x, "*" , num ,"=" , x*num , "\n")
se(num<=10){
    leia(x)
}    
senao
  escreva("Número inválido")
}
}


3 - VERIFICANDO MAIORES DE IDADE

programa {
    
	funcao inicio() {
        inteiro idade, num=0
    
    
        para(inteiro cont=1;cont<=10;cont++){
            escreva("Bem-vindo\n")
            escreva("Digite sua idade:\n")
            leia(idade)
            limpa()
            
            se(idade>=18)
            num++
        }
    escreva("Entre 0 e 10 pessoas, são\t\t", num, "\t\tmaiores de idade")
}

}

3 - CALCULANDO A MÉDIA

programa {
    
	funcao inicio() {
        cadeia nome
        real nota1, nota2, media
        inteiro cont=0
        
    enquanto(cont<15){
        escreva("Qual o seu nome:\n->")
        leia(nome)
        escreva("Digite sua 1ª nota:\n->")
        leia(nota1)
        escreva("Digite sua 2ª nota:\n->")
        leia(nota2)
        
        media = (nota1+nota2)/2
        escreva("Aluno \t 1ª nota \t2ºnota \tMédia\n")
        escreva(nome, "\t\t", nota1, "\t\t", nota2, "\t", media)
        cont++        
    }
}

}


4 - LIMITE DE CRÉDITO

programa {
    
	funcao inicio() {
    real salario, prestacao, limite
    
    escreva("Digite o valor do seu salário:\n->")
    leia(salario)
    escreva("Digite o valor da prestação:\n->")
    leia(prestacao)
    
    limite = salario*0.3
    se(prestacao<=limite){
        escreva("Crédito liberado!\n")
    }senao {
        escreva("Crédito indisponível! :( \n")
    }   
    
    }
}

ADD LAÇO DE REPETIÇÃO 
programa {
    
	funcao inicio() {
    real salario, prestacao, limite
    inteiro cont= 0
    
    enquanto(cont<10){
    escreva("Digite o valor do seu salário:\n->")
    leia(salario)
    escreva("Digite o valor da prestação:\n->")
    leia(prestacao)
    
    limite = salario*0.3
    se(prestacao<=limite){
        escreva("Crédito liberado!\n")
    }senao {
        escreva("Crédito indisponível! :( \n")
        cont++
    }   
    
    }
    
    }
}
