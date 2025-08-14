        // LOADER
      /*  const sobreposicao = document.querySelector("#precarregamento");
        window.addEventListener("load", function () {
          sobreposicao.style.display = "none";
          //sobreposicao.style.background = "skyblue";
        })*/

/*... - pontos para o texto carregando ideias*/

function updateDots() {
  const dots = document.getElementById("dots");
  if (dots.textContent.length === 3) {
    dots.textContent = "";
  } else {
    dots.textContent += ".";
  }
}
let intervalId = setInterval(updateDots, 333);

/*loader*/
function esconderSobreposicao() {
  const sobreposicao = document.querySelector("#precarregamento");
  const tempoMinimo = 1000; // 1 segundo em milissegundos
  const tempoInicio = Date.now();

  window.addEventListener("load", function() {
    const tempoRestante = tempoMinimo - (Date.now() - tempoInicio);
    
    if (tempoRestante > 0) {
      setTimeout(() => {
        sobreposicao.style.display = "none";
      }, tempoRestante);
    } else {
      sobreposicao.style.display = "none";
    }
  });
}
esconderSobreposicao();