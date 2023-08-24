export default class Aluno {
    nome;
    matricula;
    notaProva1;
    notaProva2;
    notaTrabalho;

    constructor(nome, matricula, notaProva1, notaProva2, notaTrabalho) {
        this.nome = nome;   
        this.matricula = matricula;
        this.notaProva1 = notaProva1;
        this.notaProva2 = notaProva2;
        this.notaTrabalho = notaTrabalho;
    }

    media() {
       return ((2.5*(this.notaProva1)) + (2.5*(this.notaProva2)) + (2*(this.notaTrabalho))) /(2.5+2.5+2)
    }
    
    final(){
        if (this.media() >= 7) { 
            return 0 //Aluno não precisa fazer prova final
        } else {
            let provaFinal = 14 - this.media()
        return provaFinal
    };
    
}
}
