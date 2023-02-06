const clientes = [
    {
        nome: "Andre",
        cpf: "123123123123",
        dependentes: [{
            nome: "Sara",
            parentesco: "filha",
            dataNasc: "20/03/2011"
            },
            {
            nome: "Samia",
            parentesco: "filha",
            dataNasc: "04/01/2014"                
            }],
    },

    {
        nome: "Juliana",
        cpf: "456456456456",
        dependentes: [{
            nome: "Sophia",
            parentesco: "filha",
            dataNasc: "30/08/2020"
            }],
    }
]

/// ... Spread operator ou operador de espalhamento
const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes]

console.log(listaDependentes);

//outra forma de apresentar os dados
console.table(listaDependentes);