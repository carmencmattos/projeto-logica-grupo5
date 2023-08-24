export default class Data {
    constructor(data) {
        this.data = this.valida(data)
    }

    getDia() {
        return this.data.getDate()
    }

    valida(data) {
        const [dia, mes, ano] = data.split('/')
        this.dia = dia
        this.mes = mes
        this.ano = ano

        return new Date(`${mes}-${dia}-${ano}`)
        //Validações
    }

    compara(data) {
        console.log(this.data)
        console.log(this.data)
        console.log(this.data.toString() === data.data.toString())
        return this.data === data.data
    }
}

const data1 = new Data('28/02/2023')
const data2 = new Data('28/02/2023')

console.log(data1.compara(data2))

console.log(data1.getDia())
