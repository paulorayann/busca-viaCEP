const logradouro = document.querySelector("#rua");
const bairro = document.querySelector("#bairro");
const cidade = document.querySelector("#cidade");
const estado = document.querySelector("#estado");
const hidden_input = document.querySelector("#hidden-input");
const loader = document.querySelector('.preload');
const emoji = loader.querySelector('.emoji');


const emojis = ["🕐", "🕜", "🕑","🕝", "🕒", "🕞", "🕓", "🕟", "🕔", "🕠", "🕕", "🕡", "🕖", "🕢",  "🕗", "🕣", "🕘", "🕤", "🕙",  "🕥", "🕚", "🕦",  "🕛", "🕧"];

const interval = 180;

function consultaCEP() {
          const loadEmojis = (arr) => {
            setInterval(() => {
              emoji.innerText = arr[Math.floor(Math.random() * arr.length)];
        }, interval);
        }

  
  cep = document.getElementById("cep").value;


//Iniciar animação Loading
  const init = (pedido) => {
    loadEmojis(emojis);
  }
  init();
//Pesquisar CEP
  apiURL = "https://viacep.com.br/ws/" + cep + "/json";
  pedido = new XMLHttpRequest();
  pedido.open("get", apiURL, true);
  pedido.onerror = function (e) {

//CEP inválido - interação
    document.getElementById("resposta").innerHTML = "INVÁLIDO!";
    document.getElementById("cep").style.border = "2px solid crimson";
  };

  pedido.onload = () => {
    var conteudo = JSON.parse(pedido.responseText);
    if (conteudo.erro === true) {
      document.getElementById("resposta").innerHTML = "CEP NÃO ENCONTRADO";
      
    } else {
    
      document.querySelector(".preload").style.display = "none"

          hidden_input.style.display = "block";
          console.log(conteudo);
          logradouro.value = conteudo.logradouro;
          bairro.value = conteudo.bairro; 
          cidade.value = conteudo.localidade;
          estado.value = conteudo.uf;
          
    }
  };

//Limpar Campos
  pedido.send();
  logradouro.value = "";
  bairro.value = "";
  cidade.value = "";
  estado.value = "";
  hidden_input.style.display = "none";
  resposta.innerHTML = "";
}
