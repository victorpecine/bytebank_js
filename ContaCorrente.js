// Arquivo que representa uma classe
export class ContaCorrente {
    agencia;
    cliente;

    _saldo = 0; // atributo privado

    sacar(valor) {
        if (this._saldo <= valor) {
            console.log(`\nNão há saldo suficiente para sacar R$ ${valor}`);
            return;
        }
        this._saldo -= valor;
        console.log(`\nRealizado o saque de R$ ${valor}`);
        console.log(`\n>>> Saldo atual: R$ ${this._saldo} <<<`);
        return valor;
    }

    depositar(valor) {
        if (valor < 0) {
            return;
        }
        this._saldo += valor;
        console.log(`\nDepositado o valor de R$ ${valor}`);
        console.log(`\n>>> Saldo atual: R$ ${this._saldo} <<<`);
        return valor;
    }

    transferir(valorSacado, contaQueRecebe) {
        const valorTransferido = this.sacar(valorSacado);
        contaQueRecebe.depositar(valorTransferido);
    }
}