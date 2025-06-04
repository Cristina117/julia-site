const carrinho = [];

document.querySelectorAll('.add-carrinho').forEach(botao => {
  botao.addEventListener('click', () => {
    const nome = botao.getAttribute('data-nome');
    const preco = parseFloat(botao.getAttribute('data-preco'));
    adicionarProduto(nome, preco);
  });
});

function adicionarProduto(nome, preco) {
  const produtoExistente = carrinho.find(item => item.nome === nome);
  if (produtoExistente) {
    produtoExistente.quantidade++;
  } else {
    carrinho.push({ nome, preco, quantidade: 1 });
  }
  atualizarCarrinho();
}

function atualizarCarrinho() {
  const lista = document.getElementById('lista-carrinho');
  lista.innerHTML = '';
  let total = 0;
  carrinho.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.nome} - ${item.quantidade} x R$ ${item.preco.toFixed(2)}`;
    lista.appendChild(li);
    total += item.preco * item.quantidade;
  });
  document.getElementById('total').textContent = total.toFixed(2);
}

document.getElementById('finalizar').addEventListener('click', () => {
  if (carrinho.length === 0) {
    alert('O carrinho está vazio!');
  } else {
    alert('Compra finalizada com sucesso!');
    carrinho.length = 0;
    atualizarCarrinho();
  }
});
