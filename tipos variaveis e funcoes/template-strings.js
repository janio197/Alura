const nome = "Jânio";
const idade = 2022 - 1984;
const cidadeDeNascimento = "Santa Luzia"

//Como estamos fazendo até agora
const apresentacao = "Meu nome é " + nome + ", tenho " + idade + " anos" + " e nasci em " + cidadeDeNascimento + ".";
console.log(apresentacao)

//Usando template string
const apresentacao2 = `Meu nome é ${nome}, tenho ${idade} anos e nasci em ${cidadeDeNascimento}.`;
console.log(apresentacao2);