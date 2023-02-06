// Até agora declaramos funções da seguinte fomra
let nome = "Jãnio";

function apresentar(nome){
    return `Meu nome é ${nome}`;
}
console.log(apresentar(nome));

// ou
const apresentacao = function (nome) {
    return `Meu nome é ${nome}`};
console.log(apresentacao(nome));

// Arrow function
const apresentarArrow = nome => `Meu nome é $(nome)`;
const soma = (num1, num2) => num1 + num2;

// Arrow function com + de 1 linha de instrução

const somaNumerosPequenos = (num1, num2) => {
    if(num || num2 > 10){
        return "somente números de 1 a 9" 
    } else{
        return num1 + num2;
    }
}