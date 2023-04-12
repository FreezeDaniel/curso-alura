import { Cuenta } from "./Cuenta.js";
import { CuentaCorriente } from "./CuentaCorriente.js";

export class CuentaAhorro extends Cuenta{

    constructor(cliente,numero,agencia,saldo) {
        super (cliente,numero,agencia,saldo);
    }
}