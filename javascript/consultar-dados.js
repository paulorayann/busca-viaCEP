let cep = document.querySelector('#cep');
let rua = document.querySelector('#rua');
let bairro = document.querySelector('#bairro');
let cidade = document.querySelector('#cidade');
let estado = document.querySelector('#estado');

cep.value = '';

cep.addEventListener('blur',function(e) {
    let cep = e.target.value;
    let script = document.createElement('script');
    script.src = 'https://viacep.com.br/ws/' +cep+ '/json/?callback=consultaCEP';
    document.body.appendChild(script);
    

});

function consultaCEP(retorno) {
    if("erro" in retorno) {
        alert('CEP não encontrado');
        return;
    }




    console.log(retorno);
    rua.value = retorno.logradouro;
    bairro.value = retorno.bairro;
    cidade.value = retorno.localidade;
    estado.value = retorno.uf;

}
