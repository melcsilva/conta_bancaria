import readlinesync = require("readline-sync");
import { colors } from './src/util/colors';
import { ContaController } from "./src/controller/ContaController";
import { ContaCorrente } from "./src/model/contaCorrente";
import { ContaPoupanca } from "./src/model/contaPoupanc";

export function main() { //export para tornar a função acessível fora da classe menu
    
    let contas: ContaController = new ContaController();

    let opcao, numero, agencia, tipo, saldo, limite, aniversario, valor, numeroDestino: number;
    let titular: string;
    const tipocontas = ['Conta Corrente', 'Conta Poupanca'];

    console.log("\nCriar Contas\n");

let cc1: ContaCorrente = new ContaCorrente(contas.gerarNumero(), 123, 1, "João da Silva", 1000, 100.0);
contas.cadastrar(cc1);

let cc2: ContaCorrente = new ContaCorrente(contas.gerarNumero(), 124, 1, "Maria da Silva", 2000, 100.0);
contas.cadastrar(cc2);

let cp1: ContaPoupanca = new ContaPoupanca(contas.gerarNumero(), 125, 2, "Mariana dos Santos", 4000, 12);
contas.cadastrar(cp1);

let cp2: ContaPoupanca = new ContaPoupanca(contas.gerarNumero(), 125, 2, "Juliana Ramos", 8000, 15);
contas.cadastrar(cp2);

contas.listarTodos();

    while (true) {

        console.log(colors.fg.green)

        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("                     MELZIN BANK                     ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Criar Conta                          ");
        console.log("            2 - Listar todas as Contas               ");
        console.log("            3 - Buscar Conta por Numero              ");
        console.log("            4 - Atualizar Dados da Conta             ");
        console.log("            5 - Apagar Conta                         ");
        console.log("            6 - Sacar                                ");
        console.log("            7 - Depositar                            ");
        console.log("            8 - Transferir valores entre Contas      ");
        console.log("            9 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ", 
        colors.reset);

        console.log(colors.fg.redstrong, 
        "Entre com a opção desejada: ", colors.reset);
        opcao = readlinesync.questionInt(""); //o readline nao aceitaria acentuação, então utilizamos a saída para usarmos e para a escolha de opção deixamos em branco

        if (opcao == 9) {
            console.log(colors.fg.greenstrong,
                "\nMelzin Bank - O seu melhor banco no terminal do seu computador!");
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.whitestrong,
                    "\n\nCriar uma Conta\n\n", colors.reset);
                
                console.log("Digite o Número da agência: ");
                agencia = readlinesync.questionInt("");
                
                console.log("Digite o Nome do Títular da conta: ");
                titular = readlinesync.question("");

                console.log("\nDigite o tipo da conta: ");
                tipo = readlinesync.keyInSelect(tipocontas, "", {cancel: false}) + 1;

                console.log("Digite o Saldo da conta (R$): ");
                saldo = readlinesync.questionFloat("");

                switch (tipo) {
                    case 1:
                        console.log("Digite o Limite da Conta (R$): ");
                        limite = readlinesync.questionFloat("");
                        contas.cadastrar(
                            new ContaCorrente(contas.gerarNumero(), agencia, tipo, titular, saldo, limite));
                        break;
                    case 2:
                        console.log("Digite o Dia do aniversário da Conta Poupança: ");
                        aniversario = readlinesync.questionInt("");
                        contas.cadastrar(
                            new ContaPoupanca(contas.gerarNumero(), agencia, tipo, titular, saldo, aniversario));
                        break;
                }
                keyPress()
                break;
            case 2:
                console.log(colors.fg.whitestrong,
                    "\n\nListar Todas as Contas\n\n", colors.reset);
                    
                    contas.listarTodos();
                    
                keyPress()
                break;
            case 3:
                console.log(colors.fg.whitestrong,
                    "\n\nConsultar Dados da Conta\n\n", colors.reset);

                console.log("Digite o número da conta: ");
                numero = readlinesync.questionInt("");
                contas.procurarPorNumero(numero);

                keyPress()
                break;
            case 4:
                console.log(colors.fg.whitestrong,
                    "\n\nAtualizar Dados da Conta\n\n", colors.reset);

                console.log("Digite o número da conta: ");
                numero = readlinesync.questionInt("");

                let conta = contas.buscarNoArray(numero);

                if (conta != null) {

                    console.log("Digite o Número da Agência: ");
                    agencia = readlinesync.questionInt("");

                    console.log("Digite o Nome do Títular da Conta: ");
                    titular = readlinesync.question("");

                    tipo = conta.tipo;

                    console.log("\nDigite o Saldo da Conta (R$): ");
                    saldo = readlinesync.questionFloat("");

                    switch (tipo) {
                        case 1:
                            console.log("Digite o Limite da Conta (R$): ");
                            limite = readlinesync.questionFloat("");
                            contas.atualizar(
                                new ContaCorrente(numero, agencia, tipo, titular, saldo, limite));
                            break;
                        
                        case 2:
                            console.log("Digite o Dia do Aniversário da Sua Conta Poupança: ");
                            aniversario = readlinesync.questionInt("");
                            contas.atualizar(
                                new ContaPoupanca(numero, agencia, tipo, titular, saldo, aniversario));
                            break;
                    }
                }else {
                    console.log(colors.fg.redstrong, `\nA conta número ${numero} não foi encontrada`, colors.reset);
                }

                keyPress()
                break;
            case 5:
                console.log(colors.fg.whitestrong,
                    "\n\nApagar uma Conta\n\n", colors.reset);

                console.log("Digite o Número da Conta: ");
                numero = readlinesync.questionInt("");
                contas.deletar(numero);
                keyPress()
                break;
            case 6:
                console.log(colors.fg.whitestrong,
                    "\n\nSacar Dinheiro da Conta\n\n", colors.reset);

                console.log("Digite o Número da Conta: ");
                numero = readlinesync.questionInt("");

                console.log("Digite o Valor do Saque (R$): ");
                valor = readlinesync.questionFloat("");

                contas.sacar(numero, valor);

                keyPress()
                break;
            case 7:
                console.log(colors.fg.whitestrong,
                    "\n\nDepositar Dinheiro na Conta\n\n", colors.reset);
                
                console.log("Digite o Número da Conta: ");
                numero = readlinesync.questionInt("");

                console.log("\nDigite o Valor do Depósito (R$): ");
                valor = readlinesync.questionFloat("");

                contas.depositar(numero, valor);

                keyPress()
                break;
            case 8:
                console.log(colors.fg.whitestrong,
                    "\n\nTranferência Entre Contas\n\n", colors.reset);
                
                console.log("Digite o Número da Conta de Origem: ");
                numero = readlinesync.questionInt("");

                console.log("Digite o Número da Conta de Destino: ");
                numeroDestino = readlinesync.questionInt("");

                console.log("\nDigite o Valor do Depósito (R$) ");
                valor = readlinesync.questionFloat("");

                contas.transferir(numero, numeroDestino, valor);

                keyPress()
                break;
            default:
                console.log(colors.fg.whitestrong,
                    "\nOpção Inválida!\n", colors.reset);
                
                keyPress()
                break;
        }
    }
}

    export function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: Melissa Silva");
    console.log("Generation Brasil - melissasilva245@gmail.com");
    console.log("https://github.com/melcsilva");
    console.log("*****************************************************");
}

    function keyPress(): void {
        console.log(colors.reset, "");
        console.log("\nPressione enter para continuar...");
        readlinesync.prompt(); 
}
main();
