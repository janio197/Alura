
    //Diferente de todas as outras nomenclaturas, a CLASSE inicia com letra maiúscula
class Cliente{
    constructor(nome,email,cpf,saldo){
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }
    //dentro das classes não precisamos escrever a palavra function
    depositar(valor){
        this.saldo += valor
    }

    exibirSaldo(){
        console.log(this.saldo)
    }
}

//Criando um novo cliente usando a classe criada

const andre = new Cliente("Andre", "andre@gmail.com", "123123123123", 100)

console.log(andre)