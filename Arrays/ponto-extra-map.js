//Add um ponto extra na nota do aluno

const notas = [10, 9, 8, 7, 6]

// map também é uma função callback
const notasAtualizadas = notas.map(nota => nota == 10 ?
    nota : ++nota);

console.log(notasAtualizadas);