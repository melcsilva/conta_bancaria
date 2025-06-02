import readlinesync = require("readline-sync");

export function main() { //export para tornar a função acessível fora da classe menu
    
    let opcao: number; //variável do tipo number que vai receber o numero da opção do menu que deverá se rexecutada

    while (true) {

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
        console.log("                                                     ");

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt(""); //o readline nao aceitaria acentuação, então utilizamos a saída para usarmos e para a escolha de opção deixamos em branco

        if (opcao == 9) {
            console.log("\nMelzin Bank - O seu melhor banco no terminal do seu computador!");
            sobre();
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log("\n\nCriar Conta\n\n");

                break;
            case 2:
                console.log("\n\nListar todas as contas\n\n");
                
                break;
            case 3:
                console.log("\n\nConsultar dados da Conta - por número\n\n");
                
                break;
            case 4:
                console.log("\n\nAtualizar dados da Conta\n\n");
                
                break;
            case 5:
                console.log("\n\nApagar uma Conta\n\n");
                
                break;
            case 6:
                console.log("\n\nSacar Dinheiro da Conta\n\n");
                
                break;
            case 7:
                console.log("\n\nDepositar Dinheiro na Conta\n\n");
                
                break;
            case 8:
                console.log("\n\nTranferência entre Contas\n\n");
                
                break;
            default:
                console.log("\nOpção Inválida!\n");

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

main();
