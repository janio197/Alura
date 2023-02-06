const numeros = [43, 50, 65, 12];
                         //(função                       , seguido de um número que é o valor incial do acumulador)
const soma = numeros.reduce((acum, atual) => atual + acum, 0);
console.log(soma);

const soma2 = numeros.reduce(function (acum, atual) {
    return atual + acum
}, 0);
console.log(soma2);

//Uma terceira forma de reescrever seria escrevendo a função callback fora do reduce():

function operacaoNumerica(acum, atual) {
    return atual + acum
}

const soma3 = numeros.reduce(operacaoNumerica, 0);
console.log(soma3);