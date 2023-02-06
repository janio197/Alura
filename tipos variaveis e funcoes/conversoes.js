// tipo de dados
// booleanos

//conversão implicita
const numero = 456;
const numeroString = "456"

//Na comparação ele converte a string em número (true)
console.log(numero == numeroString);

//Na operação ele não converte, concatena
console.log(numero + numeroString);

//conversão explicita
//Number()
//String()

console.log(numero + Number(numeroString));