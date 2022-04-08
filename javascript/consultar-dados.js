let cep = document.querySelector('#cep');
let rua = document.querySelector('#rua');
let bairro = document.querySelector('#bairro');
let cidade = document.querySelector('#cidade');
let estado = document.querySelector('#estado');
let btnCep = document.querySelector('#btnBuscarCep');


cep.addEventListener('blur',function(e) {
        let cep = e.target.value;
        let script = document.createElement('script');
        script.src= 'https://viacep.com.br/ws/' +cep+ '/json/?callback=consultaCEP'
        document.body.appendChild(script);
});

function consultaCEP(conteudo) {
    if("erro" in conteudo) {
        alert('CEP não encontrado');
        return;
    }



    console.log(conteudo);
    rua.value = conteudo.logradouro;
    bairro.value = conteudo.bairro;
    cidade.value = conteudo.localidade;
    estado.value = conteudo.uf;

}
