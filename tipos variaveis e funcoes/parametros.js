// parâmetro de funções

function soma(num1, num2){
  return num1 + num2;
}

console.log(soma(2, 2));
console.log(soma(245, 20));
console.log(soma(-500, 60));

// parâmetros x argumentos
    // ordem dos parâmetros

function nomeIdade(nome, idade){
    return `meu nome é ${nome} e minha idade é ${idade}`;
}

console.log(nomeIdade(40, "Jânio"));

function multiplica(num1, num2){
    return num1 * num2;
}

console.log(multiplica(soma(4, 5), soma(3, 3)));

// Vamos definir um número padrão para os parâmetros,
// Ele é colocado automaticamente, caso não determinemos algum dos parâmetros esperados pela função
// Os nomes dos parâmtros só é usado dentro do escopo da função, fora ele está liberado para ser usado em outro local
function multiplicaComParametros(num1 = 1, num2 = 1){
    return num1 * num2;
}

console.log(multiplicaComParametros (9)); //aqui fica 9 * (padrão = 1)
