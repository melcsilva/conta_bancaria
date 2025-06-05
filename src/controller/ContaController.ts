import { Conta } from "../model/Conta";
import { ContaRepositoy } from "../repository/ContaRepository";
import { colors } from "../util/colors";

export class ContaController implements ContaRepositoy {

    private listaContas: Array<Conta> = new Array<Conta>();
    numero: number = 0;

    listarTodos(): void {
        for (let conta of this.listaContas){
            conta.visualizar();
        };
    }

    procurarPorNumero(numero: number): void {
        let buscaConta = this.buscarNoArray(numero);

        if (buscaConta != null) {
            buscaConta.visualizar();
        }else
            console.log(colors.fg.red, `\nA conta número ${numero} não foi encontrada!`, colors.reset);
    }

    cadastrar(conta: Conta): void {
        this.listaContas.push(conta);
        console.log(colors.fg.yellow, `\nA conta número: ${conta.numero} foi criada com sucesso!`, colors.reset);
    }

    atualizar(conta: Conta): void {
        let buscaConta = this.buscarNoArray(conta.numero);

        if(buscaConta != null) {
            this.listaContas[this.listaContas.indexOf(buscaConta)] = conta;
            console.log(colors.fg.blue, `\nA conta número ${conta.numero} foi atualizada com sucesso!`, colors.reset);
        }else
            console.log(colors.fg.red, `\nA conta número ${conta.numero} não foi encontrada!`, colors.reset);
    }

    deletar(numero: number): void {
        let buscaConta = this.buscarNoArray(numero);

        if (buscaConta != null) {
            this.listaContas.splice(this.listaContas.indexOf(buscaConta), 1);
            console.log(colors.fg.blue, `\nA conta núumero ${numero} foi deletada com sucesso!`, colors.reset);
        }else 
        console.log(colors.fg.red, `\nA conta núumero ${numero} não foi encontrada!`, colors.reset);
    }

    public sacar(numero: number, valor: number): void { //O Objeto conta foi criado através da palavra reservada let. Por inferência, a palavra reservada let entende que a variável conta, deve ser um Objeto da Classe Conta, porque receberá o retorno do Método buscarNoArray.
        let conta = this.buscarNoArray(numero);

        if (conta != null) {

            if(conta.sacar(valor) == true)
                console.log(colors.fg.blue, `\nO saque na conta ${numero} foi efetuado com sucesso!`, colors.reset);
        }else
        console.log(colors.fg.red, `\nA conta número ${numero} não foi encontrada!`, colors.reset);
    }

    public depositar(numero: number, valor: number): void {
        let conta = this.buscarNoArray(numero);

        if (conta != null) {

            if (valor > 0) { 
            conta.depositar(valor);
            console.log(colors.fg.blue, `\nO depósito na conta ${numero} foi efetuado com sucesso!`, colors.reset);
            }if (valor <= 0) {
                console.log(colors.fg.redstrong, `\nERRO: VALOR INVÁLIDO`, colors.reset);
            }
        }else
        console.log(colors.fg.red, `\nA conta numero ${numero} não foi encontrada!`, colors.reset);
    }

    public gerarNumero(): number {
        return ++ this.numero;
    }

    public buscarNoArray(numero: number): Conta | null {

        for (let conta of this.listaContas) { //percorremos todo o Array listaContas
            if (conta.numero === numero) //Verifica se o Atributo numero, do Objeto da Classe Conta armazenado na variável conta é o mesmo número que foi enviado na variável numero.
                return conta;
        }

        return null;
    }

    public transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        let contaOrigem = this.buscarNoArray(numeroOrigem);
        let contaDestino = this.buscarNoArray(numeroDestino);

        if (contaOrigem != null && contaDestino != null) {
            if (contaOrigem.sacar(valor) == true) {
                contaDestino.depositar(valor);
                console.log(colors.fg.blue, `\nA transferência da conta número ${numeroOrigem} para a conta número ${numeroDestino} foi efetuada com sucesso!`, colors.reset);
            }
        }else
        console.log(colors.fg.red, `\nA conta número ${numeroOrigem} e/ou a conta número ${numeroDestino} não foram encontradas!`, colors.reset);
    }
}