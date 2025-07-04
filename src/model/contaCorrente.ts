import { Conta } from "./Conta"; //Através da palavra reservada import, importamos a Classe Model Conta.

export class ContaCorrente extends Conta { 

    private _limite: number; //Adicionamos o atributo _limite, específico da Classe ContaCorrente

    constructor(numero: number, agencia: number, tipo: number, titular: string, saldo: number, limite: number) {
        super(numero, agencia, tipo, titular, saldo);
        this._limite = limite;
    }

    public get limite() {
        return this._limite;
    }

    public set limite(limite: number) {
        this._limite = limite;
    }

    public sacar(valor: number): boolean {

        if (valor <= 0) {
            console.log("\nERRO: DIGITE UM VALOR VÁLIDO!");
            return false;
        }

        if((this.saldo + this._limite) < valor) {
            console.log("\n Saldo Insuficiente!");
            return false;
        }

        this.saldo = this.saldo - valor;
        return true;
    }

    public visualizar(): void {
        super.visualizar();
        console.log("Limite: " + this._limite.toFixed(2));
    }

}