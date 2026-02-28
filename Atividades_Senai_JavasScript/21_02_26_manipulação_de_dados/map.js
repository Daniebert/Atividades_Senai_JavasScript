<<<<<<< HEAD
console.log ("EXEMPLOS DO MAP");

let numeros = [1,2,3,4,5,6,7];


console.log ("Array de número:", numeros);

console.log ("              ");
console.log ("              ");

// estrutura do MAP

let dobrados = numeros.map(function(numero){

    return numero * 2;
});

console.log ("array dobrado:", dobrados);

console.log ("              ");
console.log ("              ");

let tripicado = numeros.map(numero => numero * 3);
console.log ("Array triplicado", tripicado);

console.log ("              ");
console.log ("              ");


let alunos = [
    {nome: "Daniebert" , nota:10},
    {nome: "Talita" , nota:9},
    {nome: "Manu" , nota:8},
    {nome: "Ruan" , nota:7}

];

let nomes = alunos.map (aluno =>{
return aluno.nome;

});


console.log ("Somente Nome:", nomes)

console.log ("              ");
console.log ("              ");

let Nome = ["Daniebert", "Talita", "Manu"];
let maisculo = Nome.map(nome => {
    return nome.toUpperCase();
});

console.log("Nomes MAISCULO", nome);

console.log ("              ");
=======
console.log ("EXEMPLOS DO MAP");

let numeros = [1,2,3,4,5,6,7];


console.log ("Array de número:", numeros);

console.log ("              ");
console.log ("              ");

// estrutura do MAP

let dobrados = numeros.map(function(numero){

    return numero * 2;
});

console.log ("array dobrado:", dobrados);

console.log ("              ");
console.log ("              ");

let tripicado = numeros.map(numero => numero * 3);
console.log ("Array triplicado", tripicado);

console.log ("              ");
console.log ("              ");


let alunos = [
    {nome: "Daniebert" , nota:10},
    {nome: "Talita" , nota:9},
    {nome: "Manu" , nota:8},
    {nome: "Ruan" , nota:7}

];

let nomes = alunos.map (aluno =>{
return aluno.nome;

});


console.log ("Somente Nome:", nomes)

console.log ("              ");
console.log ("              ");

let Nome = ["Daniebert", "Talita", "Manu"];
let maisculo = Nome.map(nome => {
    return nome.toUpperCase();
});

console.log("Nomes MAISCULO", nome);

console.log ("              ");
>>>>>>> 733eb1295806a4bedd3cec9c9bdb7ccaefdd55d6
console.log ("              ");