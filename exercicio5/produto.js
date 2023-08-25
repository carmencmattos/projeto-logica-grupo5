export default class Produto {
    codigo;
    nome;
    preco;
    quantidade;
    
    constructor(codigo, nome, preco, quantidade) {
        this.codigo = codigo;
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade
    }
}
