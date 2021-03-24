// classe abstrata
// utilizada apenas para herança
// não deve ser chamada diretamente
export class Conta {
    constructor (saldoInicial, cliente, agencia) {
        if (this.constructor == Conta) {
            throw new Error ('É necessário definir um tipo de conta');
        }

        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }
    
    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

    // método abstrato
    sacar(valor) {
        throw new Error ('O méto de saque não está definido para este tipo de conta')
    }

    _sacar(valor, taxa) {
        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
        }
        console.log('Saldo insuficiente para saque/transferência')
        return 0;
    }

    depositar(valor) {
        this._saldo += valor;
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}