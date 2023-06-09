/*Importación de clases*/
import {Cliente} from './Cliente.js'
import { CuentaAhorro } from './CuentaAhorro.js';
import {CuentaCorriente} from './CuentaCorriente.js';
import {Cuenta} from './Cuenta.js'


const cliente = new Cliente('Leonardo','13804050','123224');
const cliente2 = new Cliente('María','16979808','8989');

const cuentaDeLeonardo = new CuentaCorriente(cliente, '1', '001',0);
const cuentaDeMaria = new CuentaCorriente(cliente2,'2','002',0);


const CuentaAhorroLeonardo = new CuentaAhorro(cliente,'9985',"001",0);

console.log(cuentaDeLeonardo);
cuentaDeLeonardo.depositoEnCuenta(150);
console.log(cuentaDeLeonardo.verSaldo())
cuentaDeLeonardo.retirarDeCuenta(70);
console.log(cuentaDeLeonardo.verSaldo())

console.log(CuentaAhorroLeonardo);
CuentaAhorroLeonardo.depositoEnCuenta(200);
console.log(CuentaAhorroLeonardo.verSaldo())
CuentaAhorroLeonardo.retirarDeCuenta(80);
console.log(CuentaAhorroLeonardo.verSaldo())