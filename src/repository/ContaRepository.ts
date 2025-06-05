import { Conta } from "../model/Conta";

export interface ContaRepositoy {

    procurarPorNumero(numero: number): void;
    listarTodos(): void;
    cadastrar(conta: Conta): void;
    atualizar(conta: Conta): void;
    deletar(numero: number): void;

    sacar(numero: number, valor: number): void;
    depositar(numeroOrigem: number, numeroDestino: number, valor: number): void;
    
}