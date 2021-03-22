class Cliente {
    nome;
    cpf;
}

class ContaCorrente {
    agencia;
    _saldo = 0; // atributo privado

    sacar(valor) {
        if (this._saldo <= valor) {
            console.log(`\nNão há saldo suficiente para sacar R$ ${valor}`);
            return;
        }
        this._saldo -= valor;
        console.log(`\nRealizado o saque de R$ ${valor}`);
        console.log(`\n>>> Saldo atual: R$ ${this._saldo} <<<`);
    }

    depositar(valor) {
        if (valor < 0) {
            return;
        }
        this._saldo += valor;
        console.log(`\nDepositado o valor de R$ ${valor}`);
        console.log(`\n>>> Saldo atual: R$ ${this._saldo} <<<`);
    }
}

const cliente1 = new Cliente();
cliente1.nome = 'Victor';
cliente1.cpf = 08743567321;

const contaCorrenteVictor = new ContaCorrente();
contaCorrenteVictor.agencia = 1001;
contaCorrenteVictor.depositar(1000);
contaCorrenteVictor.sacar(150);