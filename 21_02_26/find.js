<<<<<<< HEAD
let numeros = [10,20,30,40,50,60];

let encontrado = numeros.find(numero =>{
     return numero > 25

});

 console.log ("Número encontrado:", encontrado)

console.log ("              ");
console.log ("              ");


 let alunos = [
    {id: 1, nome: "Daniebert" , nota:10},
    {id: 2,nome: "Talita" , nota:9},
    {id: 3,nome: "Manu" , nota:8},
    {id: 4,nome: "Ruan" , nota:7}

];

let alunoEncontrado = alunos.find(aluno => {
 return aluno.id === 2;

});

=======
let numeros = [10,20,30,40,50,60];

let encontrado = numeros.find(numero =>{
     return numero > 25

});

 console.log ("Número encontrado:", encontrado)

console.log ("              ");
console.log ("              ");


 let alunos = [
    {id: 1, nome: "Daniebert" , nota:10},
    {id: 2,nome: "Talita" , nota:9},
    {id: 3,nome: "Manu" , nota:8},
    {id: 4,nome: "Ruan" , nota:7}

];

let alunoEncontrado = alunos.find(aluno => {
 return aluno.id === 2;

});

>>>>>>> 733eb1295806a4bedd3cec9c9bdb7ccaefdd55d6
console.log ("Aluno Encontrado é:" , alunoEncontrado)