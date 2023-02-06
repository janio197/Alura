
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

//Aproveitando o cliente existente para criar um cliente poupança

class ClientePoupança extends Cliente{
    constructor(nome,email,cpf,saldo,saldoPoupanca){
        //super define quais propriedades queremos herdar
        super(nome,email,cpf,saldo)
        //aqui criamos um novo atributo
        this.saldoPoupança = saldoPoupanca
    }

    depositarPoupanca(valor){
        this.saldoPoupança += valor
    }
}

const andre = new ClientePoupança("Andre", "a@gmail.com", "123123123", 100, 200)



andre.depositar(50)
andre.depositarPoupanca(50)

console.log(andre)