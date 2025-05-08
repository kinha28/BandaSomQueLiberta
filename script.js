const imagens = document.querySelectorAll('.carrossel img');
const legendas = document.querySelectorAll('.legendas span');
let index = 0;

function mostrarImagem(i) {
  // Remove a classe "ativo" das imagens e "ativa" das legendas
  imagens.forEach(img => img.classList.remove('ativo'));
  legendas.forEach(leg => leg.classList.remove('ativa'));

  // Adiciona a classe na imagem e legenda atual
  imagens[i].classList.add('ativo');
  legendas[i].classList.add('ativa');
}

function mostrarProximaImagem() {
  index = (index + 1) % imagens.length;
  mostrarImagem(index);
}

// Troca automaticamente a cada 3 segundos
setInterval(mostrarProximaImagem, 3000);

// Quando clicar na legenda, troca manualmente
legendas.forEach((legenda, i) => {
  legenda.addEventListener('click', () => {
    index = i;
    mostrarImagem(index);
  });
});