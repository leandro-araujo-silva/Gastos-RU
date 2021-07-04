function verificar () {
    let nome = document.getElementById('nome').value
    let opcoes = document.getElementsByName('opcoes')
    let op1 = document.getElementById('bolo')
    let op2 = document.getElementById('sopa')
    let op3 = document.getElementById('reg')
    let op4 = document.getElementById('alm')
    let res = document.getElementById('res')

    let soma = ''

    let bolo = Number(op1.value)
    let sopa = Number(op2.value)
    let reg = Number(op3.value)
    let alm = Number(op4.value)

    if(opcoes[0].checked) {
        soma = (bolo * 1) + (sopa * 1) + (reg * 3) + (alm * 3)
    } else if (opcoes[1].checked) {
        soma = (bolo * 1) + (sopa * 1) + (reg * 3) + (alm * 5)
    } else if (opcoes[2].checked) {
        soma = (bolo * 1) + (sopa * 1) + (reg * 3) + (alm * 8)
    }

    res.innerHTML = `<p>Olá, <strong>${nome}!</strong></p> Você gastará, no total, R$ ${soma}.`
}
