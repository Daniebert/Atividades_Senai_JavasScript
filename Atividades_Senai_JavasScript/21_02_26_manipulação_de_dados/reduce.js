<<<<<<< HEAD
let numeros = [10,20,30,40,50,60];
console.log ("Array Original:" , numeros);


let soma = numeros.reduce(function(acumulador, numero){

return acumulador + numero;
},0);


console.log ("              ");
console.log ("              ");

console.log("Soma total:", soma);


console.log ("              ");
console.log ("              ");
let alunos = [
    {nome: "Daniebert" , nota:10},
    {nome: "Talita" , nota:9},
    {nome: "Manu" , nota:8},
    {nome: "Ruan" , nota:7}

];

let totalNotas =  alunos.reduce((acumulador, aluno)=>{

    return acumulador + aluno.nota;

},0);

let media = totalNotas / alunos.length;


console.log("Média Turma:", media)

console.log ("              ");
=======
let numeros = [10,20,30,40,50,60];
console.log ("Array Original:" , numeros);


let soma = numeros.reduce(function(acumulador, numero){

return acumulador + numero;
},0);


console.log ("              ");
console.log ("              ");

console.log("Soma total:", soma);


console.log ("              ");
console.log ("              ");
let alunos = [
    {nome: "Daniebert" , nota:10},
    {nome: "Talita" , nota:9},
    {nome: "Manu" , nota:8},
    {nome: "Ruan" , nota:7}

];

let totalNotas =  alunos.reduce((acumulador, aluno)=>{

    return acumulador + aluno.nota;

},0);

let media = totalNotas / alunos.length;


console.log("Média Turma:", media)

console.log ("              ");
>>>>>>> 733eb1295806a4bedd3cec9c9bdb7ccaefdd55d6
console.log ("              ");