const listaDeChamada = [`João`, `Ana`, `Caio`, `Lara`, `Marjorie`, `Léo`];

// Ana e Caio mudaram de escola (precisam sair da lista)
// Rodrigo entrou nesta sala (precisar incluir)

//parâmetros
//nome da array.slice(índice de qual queremos retirar , quantos elementos a partir dele, elementos a serem incluídos)

listaDeChamada.splice(1, 2, `Rodrigo`);
console.log(`Lista de chamada: ${listaDeChamada}`);

//parâmetros (apenas incluir)
//nome da array.slice(índice de onde queremos incluir , 0 (nenhum elemento será retirado), elementos a serem incluídos)

                   //(2) Depois de Ana que está no índice 1
listaDeChamada.splice(2, 0, `Rodrigo`);
console.log(`Lista de chamada: ${listaDeChamada}`);