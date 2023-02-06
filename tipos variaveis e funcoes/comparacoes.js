// == (comparação implícita)

const numero = 5;
const texto = "5";

// O JavaScript infere que o valor da const texto é um número
console.log(numero == texto);
// Aqui é preciso indicar quais os tipos estão sendo comparados
console.log(numero === texto);

console.log(typeof(numero));
console.log(typeof(texto));

// Na comparação explicita é preciso usar
Number();
String();
