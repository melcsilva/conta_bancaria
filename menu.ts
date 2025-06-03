import readlinesync = require("readline-sync");
import { colors } from './src/util/colors';
import { Conta } from "./src/model/Conta";

export function main() { //export para tornar a função acessível fora da classe menu
    
    let opcao: number; //variável do tipo number que vai receber o numero da opção do menu que deverá se rexecutada

    const conta: Conta = new Conta(1, 245, 1, "Melissa", 1000);
    conta.visualizar();
    conta.sacar(5000);
    conta.visualizar();
    conta.depositar(1000);
    conta.visualizar();

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
                    "\n\nCriar Conta\n\n", colors.reset);
                
                keyPress()
                break;
            case 2:
                console.log(colors.fg.whitestrong,
                    "\n\nListar todas as contas\n\n", colors.reset);

                keyPress()
                break;
            case 3:
                console.log(colors.fg.whitestrong,
                    "\n\nConsultar dados da Conta - por número\n\n", colors.reset);

                keyPress()
                break;
            case 4:
                console.log(colors.fg.whitestrong,
                    "\n\nAtualizar dados da Conta\n\n", colors.reset);

                keyPress()
                break;
            case 5:
                console.log(colors.fg.whitestrong,
                    "\n\nApagar uma Conta\n\n", colors.reset);

                keyPress()
                break;
            case 6:
                console.log(colors.fg.whitestrong,
                    "\n\nSacar Dinheiro da Conta\n\n", colors.reset);

                keyPress()
                break;
            case 7:
                console.log(colors.fg.whitestrong,
                    "\n\nDepositar Dinheiro na Conta\n\n", colors.reset);
                    
                keyPress()
                break;
            case 8:
                console.log(colors.fg.whitestrong,
                    "\n\nTranferência entre Contas\n\n", colors.reset);

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
