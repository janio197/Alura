const colecionador = {
    nome: "Joao do Gibi",
    idade: 41,
    tripocolecao: ["quadrinhos"],
    contato: "joao@email.com"
}

console.log(colecionador.nome);
console.log(colecionador["nome"]);

adicionarTipo:function(propriedade,tipo){
    this[propriedade].push(tipo)
  }

for(i = 0; i < 4; i++) {
    colecionador.adicionarTipo("tipocolecao","HQ"+i)
  }

  console.log(colecionador);