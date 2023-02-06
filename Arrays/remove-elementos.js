// remover elementos da lista

const notas = [10, 7, 8, 5, 10];

//O comando nomeDaArray.pop(ele remove automaticamente o último elemento)
//pop não aceita parâmetros
notas.pop();
console.log(notas);

let media = (notas[0] + notas[1] + notas[2] + notas[3])/notas.length;
console.log(`A média é ${media}`);

