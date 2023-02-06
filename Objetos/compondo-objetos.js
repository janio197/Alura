const cliente = {
    nome: "André",
    idade: 36,
    cpf: "12543652266",
    email: "andre@gmail.com",
    fones: ["5591235498", "5521988743124"]
}

cliente.dependentes = {
    nome: "Sara",
    parentesco: "filha",
    dataNasc: "20/03/2011"
}

console.log(cliente);

//Para alterar um valor dentro do objeto que está no objeto
cliente.dependentes.nome = "Sara Silva";

console.log(cliente);


