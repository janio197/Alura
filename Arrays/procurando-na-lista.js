const alunos = [`João`, `Juliana`, `Caio`, `Ana`];
const medias = [10, 7, 9, 6];

//includes -> booleano
//indexof -> rotorna um número

let listaDeNotasEAlunos = [alunos, medias];

const exibeNomeNota = (nomeDoAluno) => {
   if (listaDeNotasEAlunos[0].includes(nomeDoAluno)){
    let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno);
              //[indice da lista][Ana (índice 3)]
    return listaDeNotasEAlunos[0][indice] + ` ,sua média é ` + listaDeNotasEAlunos[1][indice]
   } else {
    return "Aluno não está cadastrado"
   }
}

console.log(exibeNomeNota("Ana"));
console.log(exibeNomeNota("Juliana"));
console.log(exibeNomeNota("Jânio"));