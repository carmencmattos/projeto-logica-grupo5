export default class Data {
    mesesDoAno = ["Janeiro","Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Dezembro"]
    data;
    constructor(data) {
        this.data = this.valida(data)
    }

    getDia() {
        console.log(this.data.getDate())
    }
    getMes() {
        console.log((this.data.getMonth() + 1)) 
    }
    getAno() {
        console.log(this.data.getFullYear())
    }
    getMexExtenso() {
        console.log(this.mesesDoAno[this.data.getMonth()])
    }
    valida(data) {
        const [dia, mes, ano] = data.split('/')
        this.dia = dia
        this.mes = mes
        this.ano = ano

        return new Date(`${mes}-${dia}-${ano}`)
    }

    compara(data) {
        const [fullDateNow, fullTimeNow] = new Date().toLocaleString().split(',')
        const [fullDateParam, fullTimeParam] = data.data.toLocaleString().split(',')
        console.log(fullDateNow === fullDateParam)
    }
}
