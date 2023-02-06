// Essa é uma versão mais moderna que o for
// Calculando média com forEach

const notas = [10, 6.5, 8, 7.5];
let somaDasNotas = 0;

// forEach = para cada elemento da array
            //nota => (arrow function) {bloco de código a ser executado para cada elemento}
            // Chama-se de função callback porque chama outra função

notas.forEach(nota => {
    somaDasNotas += nota;
})

let media = somaDasNotas / notas.length;
console.log(media);