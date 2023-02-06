//var Pode ser usada antes de declarar (ou seja depois de aparecer em uma funçao)
//var vai ser lida anted do código carregar

//var altura = 5;
//var comprimento = 7;

//var area = altura * comprimento;
//console.log(area);

//let
//let forma = "retangulo"
//let altura = 5;
//let comprimento = 7;
//let precisa ser declarada antes de usar na função e pode receber novos valores
//let area;

//if(forma === "retangulo"){
//    area = altura * comprimento;
//} else{
//    area = (altura * comprimento) /2;
//}

//console.log(area);

//const Uma vez declarado o valor não pode ser mais substituído e não pode ser declarada sem valor

const forma = "triangulo"
const altura = 5;
const comprimento = 7;
let area;

if (forma === "quadrado"){
    area = altura * comprimento;    
} else{
    area = (altura * comprimento) /2;
}

console.log(area);