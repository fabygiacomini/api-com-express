const sequence = {
  _id: 1,
  get id() { return this._id++ } 
}

const produtos = {}

function salvarProduto (produto) {
  if (!produto.id) produto.id = sequence.id
  produtos[produto.id] = produto
  return produto  // esse produto já vai ter um id setado
}

function getProduto (id) {
  return produtos[id] || {} // retorna objeto vazio se não tiver o id
}

function getProdutos () { // retornar todos os produtos
  return Object.values(produtos)
}

function excluirProduto (id) { // retornar todos os produtos
  const produto = produtos[id]
  delete produtos[id]
  return produto
}

module.exports = { salvarProduto, getProduto, getProdutos, excluirProduto } // exportar as funções para fora desse módulo