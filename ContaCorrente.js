import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
    static contadorDeContas = 0;
    constructor(cliente, agencia) {
        super(0, cliente, agencia)
        ContaCorrente.contadorDeContas ++;
    }
}