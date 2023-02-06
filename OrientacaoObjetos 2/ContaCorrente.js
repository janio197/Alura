import {Cliente} from "./Cliente.js";

//Cirando uma nova classe para conta corrente
export class ContaCorrente{
    static numerodeContas = 0;

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._Cliente = novoValor;
        }
    }

    get cliente(){
        return this._Cliente = novoValor;
    }

    get saldo(){
        return this._saldo;
    }

    constructor(agencia, cliente){
        this.agencia = agencia;
        this.cliente = cliente;
        this._saldo = 0;
        ContaCorrente.numeroDeContas += 1;
    }

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor){
        if(valor <=0)
        {
            return;
        }
        this._saldo += valor;
    }

    transferir(valor, conta){
        
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}
