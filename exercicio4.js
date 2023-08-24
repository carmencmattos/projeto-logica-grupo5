import Voo from './questao3.js'

//As 10 últimas cadeiras são reservadas para fumantes.

class VooInternacional extends Voo {
    constructor (numeroVoo, data, maxVagas, cadeirasFumantes){
        super(numeroVoo, data)
        this.poltronas = new Array(maxVagas).fill("-")
        this.cadeirasFumantes = cadeirasFumantes
    }

    tipoCadeira(n) {
        if (n > this.poltronas.length && n <= 0){
            return "Poltrona inválida!"
        } else if (n > this.poltronas.length - this.cadeirasFumantes.length){
          return "F"  
        } else {
            return "N"
        }
    }
}