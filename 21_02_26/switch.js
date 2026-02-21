console.log("========== EXEMPLOS DE SWITCH ==========");

const promptSync = require("prompt-sync");
const prompt = promptSync();


//let dia = 7


let dia = prompt("Informe um Número de 1 a 7");

switch(dia) {
    
    case 1:
        console.log("Segunda");
        break;
            case 2:
        console.log("Terça");
        break;
            case 3:
        console.log("Quarta");
        break;
            case 4:
        console.log("Quinta");
        break;
            case 5:
        console.log("Sexta");
        break;
            case 6:
        console.log("Sabado");
        break;

        default:

        console.log("Dia inválido");


}