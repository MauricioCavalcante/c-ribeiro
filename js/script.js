const inputIdade = document.getElementById('idade');

// Adiciona um event listener para o evento 'input'
inputIdade.addEventListener('input', function() {
    // Obtém o valor atual do input
    let valor = this.value;

    // Verifica se o valor possui mais de 2 dígitos
    if (valor.length > 2) {
        // Limita o valor ao máximo de 2 dígitos
        valor = valor.slice(0, 2);
        // Atualiza o valor do input
        this.value = valor;
    }
});

const radioSim = document.getElementById('radio-sim');
const radioNao = document.getElementById('radio-nao')
const campoDinamico = document.getElementById('r8');

radioSim.addEventListener('change', function() {
    if (this.checked) {
        campoDinamico.style.display = 'block';
    } else {
        campoDinamico.style.display = 'none';
    }
});

radioNao.addEventListener('change', function() {
    if (this.checked) {
        campoDinamico.style.display = 'none';
    }
});

// Seleciona o elemento input com id 'telefone'
const inputPhone = document.getElementById('telefone');

inputPhone.addEventListener('input', function() {
    let valor = this.value.replace(/\D/g, ''); // Remove caracteres não numéricos
    let format = '';

    if (valor.length > 0) {
        if (valor.length < 3) {
            format = valor.substring(0, 2);
        } else {
            format = '(' + valor.substring(0, 2) + ') ';
        }

        if (valor.length > 2) {
            if (valor.length < 8) {
                format += valor.substring(2, 7);
            } else {
                format += valor.substring(2, 7) + '-';
            }

            if (valor.length > 7) {
                format += valor.substring(7, 11);
            } else {
                format += valor.substring(7);
            }
        } else {
            format += valor.substring(2);
        }
        
        this.value = format;
    } 
});

