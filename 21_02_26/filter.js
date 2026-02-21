let numeros = [1,2,3,4,5,6,7,8,9];

console.log("Números:", numeros)

let pares = numeros.filter(function(numero)
{
return numero % 2 ===0;
});

console.log("Resultado é:", pares);

console.log ("              ");
console.log ("              ");

let MaiorQueTres = numeros.filter(numero => numero > 3);

console.log ("Maiores que três são:" , MaiorQueTres);