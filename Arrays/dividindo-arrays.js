const nomes = [`João`, `Juliana`, `Ana`, `Caio`, `Lara`, `Marjorie`, `Guilherme`, `Aline`, `Fabiana`, `André`, `Carlos`, `Paulo`, `Bia`, `Vivian`, `Isabela`, `Vinícius`, `Renan`, `Renata`, `Daisy`, `Camilo`];

//    onde começar a dividir, onde terminar (indice [0]))
const sala1 = nomes.slice(0, nomes.length/2);
//    onde começar a dividir, onde terminar(quando não definido ele vai até o último item)
const sala2 = nomes.slice(nomes.length/2);

console.log(`Alunos da sala 1: ${sala1}`);
console.log(`Alunos da sala 2: ${sala2}`);