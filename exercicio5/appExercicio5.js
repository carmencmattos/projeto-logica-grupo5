import PromptSync from 'prompt-sync'
import Estoque from './estoque.js'
import Produto from './produto.js'

const prompt = PromptSync();

let exec = true
do {
    console.log('-----Seja bem vindo ao estoque da papelaria do Esdras-----')
    let optionMenu = prompt(console.log("Informe a opçao desejada:\n1.Adicionar Produto\n2.Remover Produto\n3.Buscar Produto\n4.Ver Lista de Produtos\n5.Calcular valor Patrimonial do Estoque\n6.Alterar Produto\n7.Sair"))
    switch (Number(optionMenu)) {
        case 1:
            {
                console.log("-----------------------------------------------------------")
                const codigoProduto = prompt(console.log("Informe o codigo do produto: "))
                const nomeProduto = prompt(console.log("Informe o nome do produto: "))
                const precoProduto = prompt(console.log("Informe o preço do produto: "))
                const quantidade = prompt(console.log("Informe a quantidade produto: "))
                const produto = new Produto(codigoProduto, nomeProduto,Number(precoProduto), Number(quantidade))
                Estoque.adicionarProduto(produto)
                console.log("-----------------------------------------------------------")
            }
            break;
        case 2:
            {
                console.log("-----------------------------------------------------------")
                const codigoProduto = prompt(console.log("Informe o codigo do produto a ser removido: "))
                Estoque.removerProduto(codigoProduto)
                console.log("-----------------------------------------------------------")
            }
            break;
        case 3:
            {
                console.log("-----------------------------------------------------------")
                const codigoProduto = prompt(console.log("Informe o codigo do produto procurado: "))
                Estoque.buscarProduto(codigoProduto)
                console.log("-----------------------------------------------------------")
            }
            break;
        case 4:
            console.log("-----------------------------------------------------------")   
            Estoque.listarProdutos()
            console.log("-----------------------------------------------------------")     
            break;
        case 5:
            console.log("-----------------------------------------------------------")
            Estoque.calcularValorEstoque()
            console.log("-----------------------------------------------------------")
            break;
        case 6:
            {
                console.log("-----------------------------------------------------------")
                const codigo = prompt(console.log("Informe o codigo do produto: "))
                const propriedadeProduto = prompt(console.log("Informe a propriedade que deseja alterar: "))
                const novoValor = prompt(console.log("Informe o nome do produto: "))
                Estoque.adicionarProduto(codigo, propriedadeProduto, Number(novoValor))
                console.log("-----------------------------------------------------------")
            }
            break;
        default:
            break;
    }
    exec = prompt(console.log("Deseja executar mais alguma tarefa? (s/n)")) === 's' ? true : false
} while (exec)
console.log("Programa encerrado!")
