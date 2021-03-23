import { Cliente } from './Cliente.js';
import { ContaCorrente } from './ContaCorrente.js';
import { ContaPoupanca } from './ContaPoupanca.js';

const cliente1 = new Cliente('Victor', 12345123459);
const contaCorrenteCliente1 = new ContaCorrente(cliente1, 1001);
console.log(contaCorrenteCliente1);

const cliente2 = new Cliente('Artur', 98765987654);
const contaCorrenteCliente2 = new ContaCorrente(cliente2, 1001);
console.log(contaCorrenteCliente2);

// contaCorrente1.depositar(1500);

// contaCorrente1.transferir(500, contaCorrente2);

// console.log(ContaCorrente.contadorDeContas);

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);

console.log(contaPoupanca)