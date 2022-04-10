const logradouro = document.querySelector("#rua");
const bairro = document.querySelector("#bairro");
const cidade = document.querySelector("#cidade");
const estado = document.querySelector("#estado");
const hidden_input = document.querySelector("#hidden-input");
const loader = document.querySelector('.preload');
const emoji = loader.querySelector('.emoji');


const emojis = ["🕐", "🕜", "🕑","🕝", "🕒", "🕞", "🕓", "🕟", "🕔", "🕠", "🕕", "🕡", "🕖", "🕢",  "🕗", "🕣", "🕘", "🕤", "🕙",  "🕥", "🕚", "🕦",  "🕛", "🕧"];

const interval = 125;

const loadEmojis = (arr) => {
    setInterval(() => {
      emoji.innerText = arr[Math.floor(Math.random() * arr.length)];
      console.log(Math.floor(Math.random() * arr.length))
    }, interval);
}



function consultaCEP() {
  cep = document.getElementById("cep").value;
  apiURL = "https://viacep.com.br/ws/" + cep + "/json";
  pedido = new XMLHttpRequest();
  pedido.open("get", apiURL, true);
  pedido.onerror = function (e) {
    document.getElementById("resposta").innerHTML = "INVÁLIDO!";
    document.getElementById("cep").style.border = "2px solid #9400D3";
  };


  pedido.onload = () => {
    var conteudo = JSON.parse(pedido.responseText);
    if (conteudo.erro === true) {
      document.getElementById("resposta").innerHTML = "CEP NÃO ENCONTRADO";
      
    } else {
      const init = () => {
        loadEmojis(emojis);
      }
      init();
      document.querySelector(".preload").style.display = "none"//stop the load

      hidden_input.style.display = "block";
      console.log(conteudo);
      logradouro.value = conteudo.logradouro;
      bairro.value = conteudo.bairro;
      cidade.value = conteudo.localidade;
      estado.value = conteudo.uf;
    }
  };
  pedido.send();
  logradouro.value = "";
  bairro.value = "";
  cidade.value = "";
  estado.value = "";
  hidden_input.style.display = "none";
  resposta.innerHTML = "";
}



const init = () => {
  loadEmojis(emojis);
}
init();
//document.querySelector(".preload").style.display = "none"//stop the load