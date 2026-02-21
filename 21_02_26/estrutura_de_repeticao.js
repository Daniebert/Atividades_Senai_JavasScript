
/////  Ex: de For
console.log ("Ex: de For");
console.log ("         ===========          ");
for( let i=1; i<=5; i++) {
    console.log("Número", i);
}


console.log ("         ===========          ");
console.log ("Ex: de While");
console.log ("         ===========          ");
let contador =1;

while(contador<=5){
    console.log("Contador", contador);
    contador ++;
}

console.log ("         ===========          ");
console.log ("Ex: Foreach");
console.log ("         ===========          ");



let alunos = ["Daniebert", "Talita", "Manu", "Ruan"];


alunos.forEach(function(alunos){
    console.log("Aluno:", alunos);
})



console.log ("         ===========          ");
console.log (             "Ex: function");
cconsole.log ("         ===========          ");

function saudacao(){
    console.log ("Olá Mundo");
}

saudacao();


function saudacaoComNome (alunos){
    console.log ("Olá", alunos)

}



function somar (numero1, numero2){
return numero1 + numero2;
}

let = resultado = somar(10,5);

console.log ("Resultado da soma:", resultado);



console.log ("         ===========          ");
console.log (             "Ex: ARROW FUNCTION");
cconsole.log ("         ===========          ");


const multiplicar = (a,b) => {
    return a * b;
}

console.log("Multiplicação", multiplicar(4,2));

