import {Cliente} from './Cliente.js'
import {ContaCorrente} from './ContaCorrente.js'

const cliente1 = new Cliente();
    cliente1.nome = 'Victor';
    cliente1.cpf = 12345123459;

const contaCorrenteCliente1 = new ContaCorrente();
    contaCorrenteCliente1.cliente = cliente1;
    contaCorrenteCliente1.agencia = 1001;

const cliente2 = new Cliente();
    cliente2.nome = 'Artur';
    cliente2.cpf = 98765987654;

const contaCorrenteCliente2 = new ContaCorrente();
    contaCorrenteCliente2.cliente = cliente2;
    contaCorrenteCliente2.agencia = 1001;

contaCorrenteCliente1.depositar(1500);
contaCorrenteCliente2.depositar(200);

contaCorrenteCliente1.transferir(500, contaCorrenteCliente2);

console.log(contaCorrenteCliente1);
console.log(contaCorrenteCliente2);