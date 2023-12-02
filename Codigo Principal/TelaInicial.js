// Array de URLs de imagens para o carrossel
const imagens = [
  "https://ichef.bbci.co.uk/news/800/cpsprodpb/4585/live/e32490d0-8ddc-11ee-833d-0f8d294ddc97.jpg",
  "https://img.r7.com/images/dia-da-mentira-as-manchetes-improvaveis-do-futebol-com-o-jornal-he-01042021130223172?dimensions=771x420&no_crop=true?dimensions=151x93",
  "https://www.indaiatuba.sp.gov.br/relacoes-institucionais/imprensa/noticias/mini_jornal.jpg",
];

// Seleciona o elemento do carrossel no DOM
const carrosel = document.querySelector(".carrosel");

// Índice da imagem atual no carrossel
let indiceAtual = 0;

// Função para exibir a próxima imagem no carrossel
function exibirProximaImagem() {
  indiceAtual = (indiceAtual + 1) % imagens.length;
  atualizarImagem();
}

// Função para exibir a imagem anterior no carrossel
function exibirImagemAnterior() {
  indiceAtual = (indiceAtual - 1 + imagens.length) % imagens.length;
  atualizarImagem();
}

// Função para atualizar a imagem exibida no carrossel
function atualizarImagem() {
  carrosel.innerHTML = `<img src="${imagens[indiceAtual]}" alt="imagem ${indiceAtual}">`;
}

// Adiciona botões de navegação ao carrossel
carrosel.insertAdjacentHTML(
  "afterend",
  `<button onclick="exibirImagemAnterior()"><</button>
   <button onclick="exibirProximaImagem()">></button>`
);

// Inicializa o carrossel exibindo a primeira imagem
atualizarImagem();

// Função para postar uma notícia no site
function postarNoticia() {
  // Obtém os valores dos campos do formulário
  const titulo = document.getElementById("titulo").value;
  const categoria = document.getElementById("categoria").value;
  const conteudo = document.getElementById("conteudoNoticia").value;

  // Valida se os campos estão preenchidos
  if (!titulo || !categoria || !conteudo) {
    alert("Preencha todos os campos antes de postar a notícia.");
    return;
  }

  // Cria um elemento de notícia
  const novaNoticia = document.createElement("div");
  novaNoticia.className = "section";
  novaNoticia.innerHTML = `
    <h2>${titulo}</h2>
    <p>${conteudo}</p>
  `;

  // Adiciona a notícia à categoria correspondente no DOM
  const categoriaContainer = document.getElementById(categoria);
  categoriaContainer.appendChild(novaNoticia);

  // Limpa os campos do formulário
  document.getElementById("titulo").value = "";
  document.getElementById("categoria").value = "futebol";
  document.getElementById("conteudoNoticia").value = "";
}

// Função para realizar a moderação de comentários
function comente() {
  // Obtém o valor do campo de mensagem
  var mensagem = document.getElementById("mensagem").value;

  // Arrays de letras válidas e palavras ofensivas
  var letras = ["A", "B", "C", /*...*/, "Z", " "];
  var ofensas = ["merda", "Porra", "Bosta", /*...*/, "Bs"];

  // Verifica se a mensagem contém caracteres inválidos
  for (let i = 0; i < mensagem.length; i++) {
    let caractere = mensagem[i].toUpperCase();
    if (letras.indexOf(caractere) === -1) {
      document.getElementById(
        "Resposta"
      ).innerHTML = `A mensagem contém caracteres inválidos.`;
      return;
    }
  }

  // Divide a mensagem em palavras
  let palavras = mensagem.split(" ");

  // Verifica se a mensagem contém palavras ofensivas
  for (let i = 0; i < ofensas.length; i++) {
    for (let j = 0; j < palavras.length; j++) {
      if (palavras[j].toLowerCase() == ofensas[i].toLowerCase()) {
        document.getElementById(
          "Resposta"
        ).innerHTML = `Seu comentário apresenta palavras ofensivas.`;
        return;
      }
    }
  }

  // Limpa o campo de mensagem
  document.getElementById("mensagem").value = "";

  // Exibe mensagem de sucesso
  document.getElementById(
    "Resposta"
  ).innerHTML = `Mensagem válida, seu comentário foi enviado.`;
}

// Função para buscar notícias com base em um termo
function buscarNoticias() {
  // Obtém o termo de busca do campo
  const termo = document.getElementById("termoBusca").value.toLowerCase();

  // Seleciona todas as notícias, exceto a mensagem de boas-vindas
  const todasNoticias = document.querySelectorAll(
    ".section:not(.welcome-message)"
  );

  // Itera sobre todas as notícias
  todasNoticias.forEach((noticia) => {
    const textoNoticia = noticia.innerText.toLowerCase();

    // Exibe ou oculta a notícia com base no termo de busca
    if (textoNoticia.includes(termo)) {
      noticia.style.display = "block";
    } else {
      noticia.style.display = "none";
    }
  });
}
