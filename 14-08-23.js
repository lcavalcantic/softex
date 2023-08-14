
//verificar se numero é ímpar, par ou uma string

function verificarNum (valor){
    if (typeof valor == 'string'){
        return "É uma string!";
        }else if (typeof valor == 'number'){
            if (valor % 2 == 0){
                return "É par!";
               } else
                return "É impar!";
            }
    }    

console.log(verificarNum(10));
console.log(verificarNum('tubarão'));
console.log(verificarNum(8789687));
console.log(verificarNum(5));

