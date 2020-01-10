const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

// app.get ('/produtos', (req, res, next) => {
//   console.log('Middleware 1...')
//   next()
// })

app.use(bodyParser.urlencoded({ extended: true })) // qualquer requisição vai passar por aqui (use() faz isso)
// vai transformar em objeto para ser usado

app.get ('/produtos', (req, res, next) => {
  // res.send({ nome: 'Notebook', preco: 123.45 }) // converter para JSON automaticamente (send() que faz isso)
  res.send(bancoDeDados.getProdutos()) // agora temos uma função que retorna todos os produtos
})

app.get('./produtos/:id', (req, res, next) => {
  res.send(bancoDeDados.getProduto(req.params.id)) // buscar produto do id que veio na url
})

app.post('/produtos', (req, res, next) => {   // put( serve para)
  const produto = bancoDeDados.salvarProduto({
    nome: req.body.nome,
    preco: req.body.preco
  })
  res.send(produto) // vai converter em JSON
})

app.delete('/produtos', (req, res, next) => {   // put( serve para)
  const produto = bancoDeDados.excluirProduto(req.params.id)
  res.send(produto) // vai converter em JSON
})

app.put('/produtos', (req, res, next) => {
  const produto = bancoDeDados.salvarProduto({
    id: req.params.id,
    nome: req.body.nome,
    preco: req.body.preco
  })
  res.send(produto) // vai converter em JSON
})

app.listen(porta, () => {
  console.log(`Servidor executando na porta ${porta}.`)   // Servidor executando na porta 3003.
})