const promptSync = require("prompt-sync");
const prompt = promptSync();


const numero = prompt("Inform um Número:");

if (numero === 0 || numero < 0 ) {
    console.log("Este Número é 0 Negativo");
} else {
    console.log("Número Positivo.");
}

