//boolean

const usuarioLogado = true;
const contaPaga = false;

//Truthy ou falsy (Podem ser comportar como true e false)

//0 => false
//1 => true
console.log(0 == false);
console.log(1 == true);

//string vazia também é false
console.log("" ==  false);

//null => Vazio ou nada
let minhaVar;
let varNull = null;

console.log(minhaVar);
console.log(varNull);

let numero = 3;
let texto = "Alura";

console.log(typeof numero);
console.log(typeof texto);

console.log(typeof minhaVar);
console.log(typeof varNull);

//undefined