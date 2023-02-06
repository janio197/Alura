// o que acontece se declaramos um array sem nenhum valor na lista?

const arrayVazia = [];

console.log(arrayVazia);
console.log(arrayVazia.length);

//o que acontece se usarmos a notação de colchetes para tentar acessar o índice 0 do array

console.log(arrayVazia[0]);

//Criamos um array com 3 posições, porém em nenhuma dessas posições existe um valor.

const arrayVazia2 = [,,,];
console.log(arrayVazia2.length);
console.log(arrayVazia2[0]);
console.log(arrayVazia2[1]);
console.log(arrayVazia2[2]);

// Vamos usar o método push() visto anteriormente para adicionar um valor

arrayVazia2.push(50);
console.log(arrayVazia2)

// O resultado no log é
//[ <3 empty items>, 50 ]

//Chamamos este tipo de estrutura de ARRAY ESPARSO