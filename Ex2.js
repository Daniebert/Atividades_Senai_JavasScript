const promptSync = require("prompt-sync");
const prompt = promptSync();



const numero = prompt("Digite um número:");

if (numero > 0) {
    console.log("O número é positivo.");
} else {
    console.log("O número é negativo.");
}
