const numeros = [100, 200, 300, 400, 500, 600]
//variavel    ;condição           ;incremento i = i + 1
for (let i = 0; i < numeros.length; i++){
    console.log(i, numeros[i]);
}

//calculando média com for
const notas = [10, 6.5, 8, 7.5];
let somaDasNotas = 0;

for (let i = 0; i < notas.length; i++){
    //somaDasNotas = somaDasNotas + notas[i]
    somaDasNotas += notas[i]
}

let media = somaDasNotas / notas.length;
console.log(media);