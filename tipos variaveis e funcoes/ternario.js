const idadeMinima = 18;
const idadecliente = 19;

if(idadecliente >= idadeMinima){
    console.log("cerveja")
} else {
    console.log("suco")
};

//usando o ternario para reduzir as linhas código (melhor usar em condições curtas)
//condição ? "true" : "false"
//Se chama ternario porque usa 3 operadores em uma mesma linha (>=) (?) (:)
console.log(idadecliente >= idadeMinima ? "cerveja" : "suco");
