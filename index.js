import { Cliente } from './Cliente.js';
import { Gerente } from './Funcionario/Gerente.js'
import { Diretor } from './Funcionario/Diretor.js'
import { SistemaAutenticacao } from './SistemaAutenticacao.js'

const diretor = new Diretor('Victor', 10000, 89765432123);

const gerente = new Gerente('Artur', 5000, 12343212309);

const cliente1 = new Cliente('Ariovaldo', 54637281908, '90908765');

diretor.cadastrarSenha('12345678');

gerente.cadastrarSenha('98765432');

const loginDiretor = SistemaAutenticacao.login(diretor, '12345678');

const loginGerente = SistemaAutenticacao.login(gerente, '98765432');

const loginCliente1 = SistemaAutenticacao.login(cliente1, '90908765');

console.log(loginDiretor, loginGerente, loginCliente1);