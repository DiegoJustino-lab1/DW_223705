function calcular(event) {
    // Impede que o formulário seja enviado
    event.preventDefault();

    // Pega os valores dos campos de entrada
    var nome = document.getElementById('input').value;
    var sexo = document.getElementById('sexo').value;
    var idade = document.getElementById('idade').value;
    var valorVeiculo = document.getElementById('input4').value;

    // Inicializa a variável valorApolice
    var valorApolice;

    // Faz o cálculo do valor da apólice
    if (sexo.toLowerCase() === 'masculino' && idade < 25) {
        valorApolice = valorVeiculo * 0.15;
        console.log('O valor da apólice para ' + nome + ' é: ' + valorApolice);
    }
    else if (sexo.toLowerCase() === 'masculino' && idade >= 25) {
        valorApolice = valorVeiculo * 0.10;
        console.log('O valor da apólice para ' + nome + ' é: ' + valorApolice);
    }
    else if (sexo.toLowerCase() === 'feminino') {
        valorApolice = valorVeiculo * 0.08;
        console.log('O valor da apólice para ' + nome + ' é: ' + valorApolice);
    }

    alert('O valor da apólice para ' + nome + ' é: ' + valorApolice);
}