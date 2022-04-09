
const logradouro = document.querySelector('#rua');
const bairro = document.querySelector('#bairro');
const cidade = document.querySelector('#cidade');
const estado = document.querySelector('#estado');
const hidden_input = document.querySelector('#hidden-input');

function consultaCEP() {

    cep = document.getElementById("cep").value
    apiURL = 'https://viacep.com.br/ws/' + cep + '/json'
    pedido = new XMLHttpRequest()
    pedido.open('GET', apiURL)
    pedido.onerror = function(e) {
        document.getElementById('resposta').innerHTML = 'CEP INVÁLIDO'
        document.getElementById("cep").style.border = '1px solid red'
    
    }
    pedido.onload = () => {
        var conteudo = JSON.parse(pedido.responseText)
        if (conteudo.erro === true) {
            document.getElementById('resposta').innerHTML = 'CEP NÃO ENCONTRADO'
        } else {
            hidden_input.style.display = 'block'
            console.log(conteudo);
            logradouro.value = conteudo.logradouro;
            bairro.value = conteudo.bairro;
            cidade.value = conteudo.localidade;
            estado.value = conteudo.uf;
        }
    }
    pedido.send();
    logradouro.value = ''; 
    bairro.value = ''; 
    cidade.value = ''; 
    estado.value = ''; 
    hidden_input.style.display = 'none'
    resposta.innerHTML = ''


}