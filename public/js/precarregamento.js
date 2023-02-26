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
  // LOADER
  const sobreposicao = document.querySelector("#precarregamento");
  window.addEventListener("load", function () {
    sobreposicao.style.display = "none";
  })
}
esconderSobreposicao();