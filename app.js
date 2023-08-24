import promptSync from 'prompt-sync'
//import Aluno from './questao1.js'
//import Data from './questao2.js'
import Voo from './questao3.js'

const prompt = promptSync()

//const nome = prompt()
//const matricula = prompt()
//const notaProva1 = parseInt(prompt())
//const notaProva2 = parseInt(prompt())
//const notaTrabalho = parseInt(prompt())

// console.log(notaProva1)
// console.log(notaProva2)
// console.log(notaTrabalho)

// const aluno1 = new Aluno(nome, matricula, notaProva1, notaProva2, notaTrabalho)
// console.log(aluno1.media())


// const data = prompt()
// const data1 = new Data(data)
// console.log(data1.getDia())

const data = "25/08/2023"
const numeroVoo = "20"
const valorN = 0
const voo1 = new Voo(numeroVoo, data)


console.log(voo1.proximoLivre())
console.log(voo1.verificaOcupacao(valorN))
console.log(voo1.ocupaPoltrona(valorN))
console.log(voo1.vagas())
console.log(voo1.getVoo())




