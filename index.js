let P1 = document.getElementById('p1');
let P2 = document.getElementById('p2');
let replay = document.getElementById('replay');
let resultado2 = document.getElementById('L');
let resultado = document.getElementById('N');
let rodada = document.getElementById('rodada');
let ganhador = document.getElementById('ganhador');
let x = document.getElementById('x');
let atualizar = [];

let jogada1 = 0;
let jogada2 = 0;
let rodadas = 0;
let vitoriasP1 = 0;
let vitoriasP2 = 0;


P1.onclick = function DUELO() {
  let numero = Math.floor(Math.random() * 6) + 1;
  resultado.innerHTML = "Player1: " + numero + " -- ";
  P1.disabled = true;
  P2.disabled = false;
  jogada1 = numero;
  atualizarLocalStorage();
};

P2.onclick = function DUELO2() {
  let numero = Math.floor(Math.random() * 6) + 1;
  resultado2.innerHTML = "-- Player2: " + numero ;
  jogada2 = numero;
  P1.disabled = false;
  P2.disabled = true;
  rodadas++;
  rodadaAtual();
  atualizarLocalStorage();
};

replay.onclick = function () {
  P2.disabled = true;
  P1.disabled = false;
  resultado.innerHTML = "";
  resultado2.innerHTML = "";
  rodada.innerHTML = "";
  ganhador.innerHTML = "";
  x.innerHTML = "";
  jogada1 = 0;
  jogada2 = 0;
  rodadas = 0;
  vitoriasP1 = 0;
  vitoriasP2 = 0;
  atualizar = [];
};

function rodadaAtual() {
  if (jogada1 > jogada2) {
    rodada.innerHTML = `O Player 1 ganhou a rodada ${rodadas}`;
    vitoriasP1++;
  } else if (jogada2 > jogada1) {
    rodada.innerHTML = `O Player 2 ganhou a rodada ${rodadas}`;
    vitoriasP2++;
  } else {
    rodada.innerHTML = `Empate na rodada ${rodadas}`;
  }

  if (rodadas === 3) {
    vencedor();
    P1.disabled = true;
    P2.disabled = true;

  }
  atualizarLocalStorage();
}

function vencedor() {
  if (vitoriasP1 > vitoriasP2) {
    ganhador.innerHTML = "Resultado: Player 1 venceu!";
  
  } else if (vitoriasP2 > vitoriasP1) {
    ganhador.innerHTML = "Resultado: Player 2 venceu!";
  
  } 
  else if (vitoriasP1 = vitoriasP2){
    ganhador.innerHTML = "Resultado: Empate!";
   
  }
  atualizarLocalStorage()
}

function atualizarLocalStorage() {
  localStorage.setItem('jogada1', jogada1);
  localStorage.setItem('jogada2', jogada2);
  localStorage.setItem('rodadas', rodadas);
  localStorage.setItem('vitoriasP1', vitoriasP1);
  localStorage.setItem('vitoriasP2', vitoriasP2);
}



window.addEventListener('load', function () {
  if (localStorage.getItem('jogada1')  !== null ) {
    jogada1 = JSON.parse(localStorage.getItem('jogada1'));
    resultado.innerHTML = "Player 1: " + jogada1 + " -- ";
    
  }
  if (localStorage.getItem('jogada2') !== null ) {
    jogada2 =JSON.parse(localStorage.getItem('jogada2'));
    resultado2.innerHTML = "-- Player 2: " + jogada2;
   
  }
  if (localStorage.getItem('rodadas') !== null) {
    rodadas = JSON.parse(localStorage.getItem('rodadas'));
  }
  if (localStorage.getItem('vitoriasP1') !== null) {
    vitoriasP1 = JSON.parse(localStorage.getItem('vitoriasP1'));
      
  }
  if (localStorage.getItem('vitoriasP2') !== null ) {
    vitoriasP2 = JSON.parse(localStorage.getItem('vitoriasP2'));

  }
  //correto
  if(localStorage.getItem('rodadas')!== null  > 3){
    P1.disabled = true
    P2.disabled = true
    vencedor()
  }
   
  
});