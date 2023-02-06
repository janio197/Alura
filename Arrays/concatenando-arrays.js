//Vamos juntar as duas salas

const salaDePython = [`Melissa`, `Helena`, `Rodrigo`];
const salaDeJavaScript = [`Ju`, `Leo`, `Raquel`];

const salasUnificadas = salaDePython.concat(salaDeJavaScript);
console.log(salasUnificadas);

// Esse método não altera as arrays originais, por isso criamos uma outra variável para guardas esse valor