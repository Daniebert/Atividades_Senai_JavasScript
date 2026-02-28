const promptSync = require("prompt-sync");
const prompt = promptSync();



const nota = prompt("Digite a nota do Aluno:");

if (nota >= 60 ) {
    console.log("Aluno Aprovado");
} else {
    console.log("Aluno Reprovado.");
}
