const logradouro = document.querySelector("#rua");
const bairro = document.querySelector("#bairro");
const cidade = document.querySelector("#cidade");
const estado = document.querySelector("#estado");
const hidden_input = document.querySelector("#hidden-input");
const loader = document.querySelector('.preload');
const emoji = loader.querySelector('.emoji');


const emojis = ["π", "π", "π","π", "π", "π", "π", "π", "π", "π ", "π", "π‘", "π", "π’",  "π", "π£", "π", "π€", "π",  "π₯", "π", "π¦",  "π", "π§"];

const interval = 180;

function consultaCEP() {
          const loadEmojis = (arr) => {
            setInterval(() => {
              emoji.innerText = arr[Math.floor(Math.random() * arr.length)];
        }, interval);
        }
  
  cep = document.getElementById("cep").value;

//Iniciar animaΓ§Γ£o Loading
  const init = (pedido) => {
    loadEmojis(emojis);
  }
  init();
//Pesquisar CEP
  apiURL = "https://viacep.com.br/ws/" + cep + "/json";
  pedido = new XMLHttpRequest();
  pedido.open("get", apiURL, true);
  pedido.onerror = function (e) {

//CEP invΓ‘lido - formato
    document.getElementById("resposta").innerHTML = "INVΓLIDO!";
    document.getElementById("cep").style.border = "2px solid crimson";
  };
//CEP invΓ‘lido - Valida CEP
  pedido.onload = () => {
    var conteudo = JSON.parse(pedido.responseText);
    if ("erro"  in conteudo) {
      document.getElementById("resposta").innerHTML = "InvΓ‘lido!";
      document.getElementById("cep").style.border = "2px solid crimson";
      
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
