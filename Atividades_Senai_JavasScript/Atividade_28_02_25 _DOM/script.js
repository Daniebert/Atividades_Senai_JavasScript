const form = document.getElementById('form-imc');
const resultado = document.getElementById('resultado');

form.addEventListener('submit', function(event) {
    event.preventDefault(); 

const btnLimpar = document.getElementById('btn-limpar');

btnLimpar.addEventListener('click', function() {
    // Limpa a div de resultado
    resultado.innerHTML = '';
});

    // Captura os valores
    const nome = document.getElementById('nome').value; // Removido o parseFloat
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    if (nome && peso && altura) {
        const imc = (peso / (altura * altura)).toFixed(2);
        let classificacao = '';

        if (imc < 18.5) classificacao = 'Abaixo do peso';
        else if (imc < 25) classificacao = 'Peso ideal';
        else if (imc < 30) classificacao = 'Sobrepeso';
        else classificacao = 'Obesidade';

        // Exibe o nome e o IMC formatados corretamente
        resultado.innerHTML = `<h3> Olá ${nome}, seu IMC é: ${imc}</h3><p>Status: ${classificacao}</p>`;
    }
});
