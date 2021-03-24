import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
    static contadorDeContas = 0;
    constructor(cliente, agencia) {
        super(0, cliente, agencia)
        ContaCorrente.contadorDeContas ++;
    }

    // sobrescrevendo o método sacar da Conta por ter outra taxa
    sacar(valor) {
        let taxa = 1.1;
        return this._sacar(valor, taxa);
        }
}