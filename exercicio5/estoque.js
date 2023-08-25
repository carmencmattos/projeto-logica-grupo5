
export default class Estoque {
    static listaProdutos = [
        {
            codigo: '1',
            nome: "caneta",
            preco: 1,
            quantidade: 2
        },
        {
            codigo: '2',
            nome: "borracha",
            preco: 0.5,
            quantidade: 3
        },
        {
            codigo: '3',
            nome: "resma de papel",
            preco: 30,
            quantidade: 1
        },
        {
            codigo: '4',
            nome: "lapis",
            preco: 1.5,
            quantidade: 5
        },
        {
            codigo: '5',
            nome: "grampeador",
            preco: 7,
            quantidade: 5
        },
        {
            codigo: '6',
            nome: "caderno",
            preco: 10,
            quantidade: 2
        },
        {
            codigo: '7',
            nome: "caderno homem-aranha",
            preco: 50,
            quantidade: 1
        },
    ]
    static produtoJaExiste(produto) {
        return this.listaProdutos.some( p => {
            if(p.codigo == produto.codigo || p.nome == produto.nome) {
                return true
            }
            return false
        })
        
    }
    static adicionarProduto(produto) {
        if(this.produtoJaExiste(produto)) {
            console.log('Produto ja consta no estoque')
        } else {
            this.listaProdutos.push(produto)
            console.log('Inserido com sucesso!')
        }
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
        const arrayValorTotalPorProduto = this.listaProdutos.map(produto => produto.quantidade * produto.preco)
        console.log(arrayValorTotalPorProduto.reduce((soma, valorAtual) => {return soma + valorAtual}, 0)) 
    }

    static alterarProdutos(codigo, propriedade, novoValor) {
        if(this.indiceProduto(codigo) !== -1) {
            this.listaProdutos[this.indiceProduto(codigo)] = {...this.listaProdutos[this.indiceProduto(codigo)], [propriedade]: novoValor}
            console.log(this.listaProdutos[this.indiceProduto()])
            console.log("Produto alterado com sucesso!")
        }  else {
            console.log("Produto não encontrado no estoque!")
        }
    }

}
