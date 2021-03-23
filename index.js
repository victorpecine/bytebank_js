import {Cliente} from './Cliente.js'
import {ContaCorrente} from './ContaCorrente.js'

const cliente1 = new Cliente();
cliente1.nome = 'Victor';
cliente1.cpf = 98743567321;

const contaCorrenteVictor = new ContaCorrente();
contaCorrenteVictor.agencia = 1001;
contaCorrenteVictor.depositar(1000);
contaCorrenteVictor.sacar(150);