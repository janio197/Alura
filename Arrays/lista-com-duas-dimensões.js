const alunos = [`João`, `Juliana`, `Caio`, `Ana`];
const medias = [10, 7, 9, 6];

                        //  [0]      [1]
let listaDeNotasEAlunos = [alunos, medias];

 //indice da lista pesquisada[alunos][João no índice 0]                [medias][média "10" no indice 0]
console.log(`${listaDeNotasEAlunos[0][0]}, sua média é ${listaDeNotasEAlunos[1][0]}`);