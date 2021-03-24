import { Cliente } from './Cliente.js';
import { Conta } from './Conta.js';
import { ContaCorrente } from './ContaCorrente.js';
import { ContaPoupanca } from './ContaPoupanca.js';

const cliente1 = new Cliente('Victor', 12345123459);
const contaCorrenteCliente1 = new ContaCorrente(cliente1, 1001);
const contaPoupancaCliente1 = new ContaPoupanca(50, cliente1, 1001);

const cliente2 = new Cliente('Artur', 98765987654);
const contaCorrenteCliente2 = new ContaCorrente(cliente2, 1001);

const conta = new Conta(0, cliente1, 1001);