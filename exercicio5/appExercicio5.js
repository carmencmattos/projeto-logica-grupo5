import Estoque from './estoque.js'
import Produto from './produto.js'


const produto1 = new Produto(12, "caneta", 5)
const produto2 = new Produto(1, "casa", 50)
const produto3 = new Produto(2, "carro", 55)
const produto4 = new Produto(112, "cama", 555)

Estoque.adicionarProduto(produto1)
Estoque.adicionarProduto(produto2)
Estoque.adicionarProduto(produto3)
Estoque.adicionarProduto(produto4)
Estoque.calcularValorEstoque()
Estoque.listarProdutos()

