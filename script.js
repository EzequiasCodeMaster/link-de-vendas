// Função de busca
document.getElementById('buscaInput').addEventListener('keyup', function() {
  const query = this.value.toLowerCase();
  const produtos = document.querySelectorAll('#listaProdutos li');

  produtos.forEach(function(produto) {
    const nome = produto.querySelector('.produto-nome').textContent.toLowerCase();
    if (nome.includes(query)) {
      produto.style.display = ''; // Mostra o produto
    } else {
      produto.style.display = 'none'; // Esconde o produto
    }
  });
});
