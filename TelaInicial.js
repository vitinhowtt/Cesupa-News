const imagens = [
    "https://blog.fortestecnologia.com.br/wp-content/uploads/2019/07/fortes-tecnologia-a-influencia-das-redes-sociais-fake-news-1024x535.jpg",
    "https://img.r7.com/images/dia-da-mentira-as-manchetes-improvaveis-do-futebol-com-o-jornal-he-01042021130223172?dimensions=771x420&no_crop=true?dimensions=151x93",
    "https://www.indaiatuba.sp.gov.br/relacoes-institucionais/imprensa/noticias/mini_jornal.jpg"
  ];

  const conteudo = document.querySelector('.conteudo');
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
    conteudo.innerHTML = `<img src="${imagens[indiceAtual]}" alt="imagem ${indiceAtual}">`;
  }

  conteudo.insertAdjacentHTML(
    'afterend',
    `<button onclick="exibirImagemAnterior()"><</button>
    <button onclick="exibirProximaImagem()">></button>`
  );

  atualizarImagem();


  function comente() {
    var mensagem = document.getElementById('mensagem').value;
    var letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'j', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', ' '];
    var ofensas = ['merda', 'Merda', 'Porra', 'porra', 'Bosta', 'bosta', 'Fdp', 'fdp', 'caralho' , 'Caralho' , 'krl' , 'KRL' , 'Krl' , 'Bst' , 'BST' , 'Bs'];

    for (let i = 0; i < mensagem.length; i++) {
        let caractere = mensagem[i].toUpperCase();
        if (letras.indexOf(caractere) === -1) {
            document.getElementById('Resposta').innerHTML = `A mensagem contém caracteres inválidos.`;
            return;
        }
    }

    let palavras = mensagem.split(' ');
    for (let i = 0; i < ofensas.length; i++) {
        for (let j = 0; j < palavras.length; j++) {
            if (palavras[j].toLowerCase() == ofensas[i].toLowerCase()) {
                document.getElementById('Resposta').innerHTML = `Seu comentário apresenta palavras ofensivas.`;
                return;
            }
        }
    }
    document.getElementById('mensagem').value = '';
    document.getElementById('Resposta').innerHTML = `Mensagem válida, seu comentario foi enviado.`;
   
}