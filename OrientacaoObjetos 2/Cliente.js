//Criando uma classe para replicar o cadastro
//Export envia para outros arquivos essa classe
export class Cliente{
    get cpf(){
        return this._cpf;
    }

    constructor(nome, cpf){
        this.nome = nome;
        this._cpf = cpf;
    }
}