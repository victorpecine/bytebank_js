import { Cliente } from './Cliente.js';
import { ContaCorrente } from './ContaCorrente.js';
import { ContaPoupanca } from './ContaPoupanca.js';
import { ContaSalario } from './ContaSalario.js';

const cliente1 = new Cliente('Victor', 12345123459);
const contaCorrenteCliente1 = new ContaCorrente(cliente1, 1001);
const contaPoupancaCliente1 = new ContaPoupanca(50, cliente1, 1001);

const cliente2 = new Cliente('Artur', 98765987654);
const contaCorrenteCliente2 = new ContaCorrente(cliente2, 1001);

const cliente3 = new Cliente('Mariana', 65432178971);
const contaSalarioCliente3 = new ContaSalario(cliente3);

contaSalarioCliente3.depositar(100);
contaSalarioCliente3.sacar(50);

// console.log(contaSalarioCliente3.saldo);
console.log(contaSalarioCliente3);