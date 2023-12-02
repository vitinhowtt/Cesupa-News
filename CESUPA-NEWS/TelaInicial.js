const imagens = [
  "https://ichef.bbci.co.uk/news/800/cpsprodpb/4585/live/e32490d0-8ddc-11ee-833d-0f8d294ddc97.jpg",
  "https://img.r7.com/images/dia-da-mentira-as-manchetes-improvaveis-do-futebol-com-o-jornal-he-01042021130223172?dimensions=771x420&no_crop=true?dimensions=151x93",
  "https://www.indaiatuba.sp.gov.br/relacoes-institucionais/imprensa/noticias/mini_jornal.jpg",
];

const carrosel = document.querySelector(".carrosel");
let indiceAtual = 0;

function exibirProximaImagem() {
  indiceAtual = (indiceAtual + 1) % imagens.length;
  atualizarImagem();
}

function exibirImagemAnterior() {
  indiceAtual = (indiceAtual - 1 + imagens.length) % imagens.length;
  atualizarImagem();
}

function atualizarImagem() {
  carrosel.innerHTML = `<img src="${imagens[indiceAtual]}" alt="imagem ${indiceAtual}">`;
}

carrosel.insertAdjacentHTML(
  "afterend",
  `<button onclick="exibirImagemAnterior()"><</button>
<button onclick="exibirProximaImagem()">></button>`
);

atualizarImagem();

function postarNoticia() {
  const titulo = document.getElementById("titulo").value;
  const categoria = document.getElementById("categoria").value;
  const conteudo = document.getElementById("conteudoNoticia").value;

  // Validar se os campos estão preenchidos
  if (!titulo || !categoria || !conteudo) {
    alert("Preencha todos os campos antes de postar a notícia.");
    return;
  }

  // Criar elemento de notícia
  const novaNoticia = document.createElement("div");
  novaNoticia.className = "section";
  novaNoticia.innerHTML = `
    <h2>${titulo}</h2>
    <p>${conteudo}</p>
  `;

  // Adicionar a notícia à categoria correspondente
  const categoriaContainer = document.getElementById(categoria);
  categoriaContainer.appendChild(novaNoticia);

  // Limpar campos do formulário
  document.getElementById("titulo").value = "";
  document.getElementById("categoria").value = "futebol";
  document.getElementById("conteudoNoticia").value = "";
}

function comente() {
  var mensagem = document.getElementById("mensagem").value;
  var letras = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "j",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    " ",
  ];
  var ofensas = [
    "merda",
    "Merda",
    "Porra",
    "porra",
    "Bosta",
    "bosta",
    "Fdp",
    "fdp",
    "caralho",
    "Caralho",
    "krl",
    "KRL",
    "Krl",
    "Bst",
    "BST",
    "Bs",
  ];

  for (let i = 0; i < mensagem.length; i++) {
    let caractere = mensagem[i].toUpperCase();
    if (letras.indexOf(caractere) === -1) {
      document.getElementById(
        "Resposta"
      ).innerHTML = `A mensagem contém caracteres inválidos.`;
      return;
    }
  }

  let palavras = mensagem.split(" ");
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
  document.getElementById("mensagem").value = "";
  document.getElementById(
    "Resposta"
  ).innerHTML = `Mensagem válida, seu comentario foi enviado.`;
}

function buscarNoticias() {
  const termo = document.getElementById("termoBusca").value.toLowerCase();

  // Buscar notícias em todas as categorias
  const todasNoticias = document.querySelectorAll(
    ".section:not(.welcome-message)"
  );
  todasNoticias.forEach((noticia) => {
    const textoNoticia = noticia.innerText.toLowerCase();

    // Exibir ou ocultar notícia com base no termo de busca
    if (textoNoticia.includes(termo)) {
      noticia.style.display = "block";
    } else {
      noticia.style.display = "none";
    }
  });
}
