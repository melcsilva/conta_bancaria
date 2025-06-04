import { Conta } from "../model/Conta";

export interface ContaRepositoy {

    procurarPorNumero(numero: number): void;
    listarTodas(): void;
    cadastrar(conta: Conta): void;
    atualizar(conta: number): void;
    deletar(numero: number): void;

    sacar(numero: number, valor: number): void;
    depositar(numeroOrigem: number, numeroDestino: number, valor: number): void;
    
}