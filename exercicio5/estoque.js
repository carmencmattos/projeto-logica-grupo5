export default class Estoque {
    static listaProdutos = []
    
    static adicionarProduto(produto) {
        this.listaProdutos.push(produto)
    }

    static indiceProduto(codigo) {
        return this.listaProdutos.findIndex(produto => produto.codigo == codigo )
    }

    static removerProduto(codigo){
        const indiceProdutos = this.listaProdutos.indexOf(produto => produto.codigo == codigo)
        if (this.indiceProduto(codigo) !== -1) {
            this.listaProdutos.splice(indiceProdutos, 1)
        } else {
            console.log("Produto não encontrado no estoque!")
        }
    }

    static buscarProduto(codigo){
        if(this.indiceProduto(codigo) !== -1) {
            console.log(`Produto encontrado: ${JSON.stringify(this.listaProdutos[this.indiceProduto(codigo)])}`)
        } else {
            console.log("Produto não encontrado no estoque!")
        }

    }

    static listarProdutos() {
        console.log(this.listaProdutos)
    }

    static calcularValorEstoque(){
        console.log(this.listaProdutos.reduce((soma, valorAtual) => {soma + valorAtual.preco}, 0)) 
    }

}
