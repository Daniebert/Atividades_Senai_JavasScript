const promptSync = require('prompt-sync');
const prompt = promptSync();


const idade = Number(prompt('Informe sua Idade: '));


if (idade === 0 || idade < 12) {
    console.log('Você é uma Criança');
} 

else if (idade >= 12 && idade < 18) {
    console.log('Você é Adolescente');
} 
else if (idade >= 18) {
    console.log('Você é Adulto');
}
else {
    console.log('Idade inválida');
}
