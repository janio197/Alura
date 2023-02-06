// calcular a média das notas

let nota1 = 10;
let nota2 = 6.5;
let nota3 = 8;
let nota4 = 7.5;

let media = (nota1 + nota2 + nota3 + nota4) / 4;
console.log(media);

// Para uma sala com dezenas de alunos essa técnica é impraticável
// vamos criar um array (lista)

       //item 0   1   2   3
let notas = [10, 6.5, 8, 7.5];
let media2 = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

//Nome da array.length mede a quantidade de itens da array

console.log(media2);
