import {Cliente} from './Cliente.js'
import {ContaCorrente} from './ContaCorrente.js'

const contaCorrente1 = new ContaCorrente();
    contaCorrente1.cliente = new Cliente();
    contaCorrente1.cliente.nome = 'Victor';
    contaCorrente1.cliente.cpf = 12345123459;
    contaCorrente1.agencia = 1001;

const contaCorrente2 = new ContaCorrente();
    contaCorrente2.cliente = new Cliente();
    contaCorrente2.cliente.nome = 'Artur';
    contaCorrente2.cliente.cpf = 98765987654;
    contaCorrente2.agencia = 1001;

contaCorrente1.depositar(1500);

contaCorrente1.transferir(500, contaCorrente2);

console.log(contaCorrente1);
console.log(contaCorrente2);