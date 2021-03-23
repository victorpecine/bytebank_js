import { Cliente } from "./Cliente.js";

// Arquivo que representa uma classe
export class ContaCorrente {
    agencia;
    _cliente;

    set _cliente(novoCliente) {
        if (novoCliente instanceof Cliente) {
            this._cliente = novoCliente;
        }
    }

    get _cliente() {
        return this._cliente;
    }

    _saldo = 0; // atributo privado

    get saldo() {
        return this._saldo
    }

    sacar(valor) {
        if (this._saldo <= valor) {
            console.log(`\nNão há saldo suficiente para sacar R$ ${valor}`);
            return;
        }
        this._saldo -= valor;
        // console.log(`\nRealizado o saque de R$ ${valor}`);
        // console.log(`\n>>> Saldo atual: R$ ${this._saldo} <<<`);
        return valor;
    }

    depositar(valor) {
        if (valor < 0) {
            return;
        }
        this._saldo += valor;
        console.log(`\nDepositado o valor de R$ ${valor}`);
        // console.log(`\n>>> Saldo atual: R$ ${this._saldo} <<<`);
        return valor;
    }

    transferir(valorSacado, contaQueRecebe) {
        if (valorSacado > this._saldo) {
            console.log(`\nNão há saldo suficiente para fazer a transferência`)
            return;
        }
        const valorTransferido = this.sacar(valorSacado);
        contaQueRecebe.depositar(valorTransferido);
        console.log(`\nTransferido o valor de R$ ${valorTransferido}`)
    }
}