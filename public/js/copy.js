// Seleciona o elemento onde o ano será exibido
const anoAtualElement = document.getElementById("ano-atual");

// Obtém o ano atual
const anoAtual = new Date().getFullYear();

// Atualiza o conteúdo do elemento com o ano atual
anoAtualElement.innerHTML = `<a href="https://bmfolio.web.app/" target="_blank" rel="noopener noreferrer">
    © ${anoAtual} Bruno Moraes</a>&nbsp;|&nbsp;<a href="licenca-agplv3.html" title="Visualizar licença AGPLv3" target="_blank">Evoluindo a cada código</a>`;