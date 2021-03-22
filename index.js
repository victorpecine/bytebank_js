class Cliente {
    nome;
    cpf;
}

class ContaCorrente {
    agencia;
    saldo;

    sacar(valor) {
        if (this.saldo >= valor) {
            this.saldo -= valor;
            console.log(`\nRealizado saque de R$ ${valor}`);
            console.log(`\n>>> Saldo atual: R$ ${this.saldo} <<<`);
        } else {
            console.log(`\nNão há saldo suficiente para sacar R$ ${valor}`);
        }
    }
}

const cliente1 = new Cliente();
cliente1.nome = 'Victor';
cliente1.cpf = 08743567321;

const contaCorrenteVictor = new ContaCorrente();
contaCorrenteVictor.agencia = 1001;
contaCorrenteVictor.saldo = 100;

contaCorrenteVictor.sacar(200);