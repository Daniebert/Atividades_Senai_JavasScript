
/*

VARIAVEIS 
let = Consigo alterar o valor em qualquer parte do meu código. 

const = A mesma vai ser definida até o fim da sua função

*/

let nome = "Daniebert";

let Nome = "Daniebert Maisculo";

let NOME = "Daniebert Tudo Maisculo";

console.log('==============================');
console.log(nome);
console.log(Nome);
console.log(NOME);

console.log('==============================');

const preco = 19.9;

console.log('====== typeof me informando se é number, booleano, ou letras  ======');

console.log(typeof preco);

console.log('==============================');


const ativo = true ;

console.log(typeof ativo);


// npm install prompt-sync

const promptSync = require("prompt-sync");
const prompt = promptSync();

const n1 = Number(prompt("Informe o Primeiro: "));
const n2 = Number(prompt("Informe o Segundo: "));

console.log("Soma:", n1 + n2);
