import { Cliente } from './Cliente.js'
import { ContaCorrente } from './ContaCorrente.js'

const cliente1 = new Cliente('Victor', 12345123459);

const contaCorrente1 = new ContaCorrente(cliente1, 1001);

const cliente2 = new Cliente('Artur', 98765987654);

const contaCorrente2 = new ContaCorrente(cliente2, 1001);

// contaCorrente1.depositar(1500);

// contaCorrente1.transferir(500, contaCorrente2);

console.log(ContaCorrente.contadorDeContas);