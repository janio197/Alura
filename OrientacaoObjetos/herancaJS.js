class Cliente{
    constructor(nome,email,cpf,saldo){
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }

    depositar(valor){
        this.saldo += valor
    }

    exibir(saldo){
        console.log(this.saldo)
    }
}

//Nova classe para herdar as características de Cliente

Class ClientePoupanca extends Class Cliente{
    constructor(nome,email,cpf,saldo,saldoPoupanca){
        super(nome,email,cpf,saldo)
        this.saldoPoupanca = saldoPoupanca
    }

    depositarPoupanca(valor){
        this.saldoPopupanca += valor
    }
}

//Para instanciar um novo objeto baseado na nova classe criada

const andre = new ClientePoupanca("Andre", "a@mail.com", "12312312312", 100, 200)

andre.depositar(50)
andre.depositarPoupanca(50)