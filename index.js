import { Cliente } from './Cliente.js'
import { ContaCorrente } from './ContaCorrente.js'

const cliente1 = new Cliente();
cliente1.nome = 'Victor';
cliente1.cpf = 12345123459;

const contaCorrente1 = new ContaCorrente();
contaCorrente1.cliente = cliente1;
contaCorrente1.agencia = 1001;

const cliente2 = new Cliente();
cliente2.nome = 'Artur';
cliente2.cpf = 98765987654;

const contaCorrente2 = new ContaCorrente();
contaCorrente2.cliente = cliente2
contaCorrente2.agencia = 1001;

// contaCorrente1.depositar(1500);

// contaCorrente1.transferir(500, contaCorrente2);

// console.log(contaCorrente1.saldo);
// console.log(contaCorrente2.cliente);