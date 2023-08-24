export default class Voo {
    numeroVoo;
    data;
    
    constructor (numeroVoo, data) {
        const poltronas = []
        for (let i=0; i < 99; i++) {
            poltronas.push("-")
        }
        this.poltronas = poltronas
        this.numeroVoo = numeroVoo
        this.data = data
        
    }

    proximoLivre() {
        return (this.poltronas.indexOf("-") + 1)
    }

    verificaOcupacao(n) {
        return this.poltronas[n-1] == "x"
    }

    ocupaPoltrona(n) {
        if (n > this.poltronas.length && n <= 0){
            return "Poltrona inválida!"
        } else if (this.verificaOcupacao(n)) {
            return "Esta cadeira já está ocupada!"
        } else {
            this.poltronas[n-1] = "x"
            return "A operação foi bem sucedida"
        }
    }

    vagas() {
        return this.poltronas.filter(poltrona => poltrona == "-").length
        
    }

    getVoo() {
        return this.numeroVoo
    }
    
}