function contar(){
    var inicio = document.getElementById('inicio').value
    var fim = document.getElementById('fim').value
    var passo = document.getElementById('passo').value
    var res = document.getElementById('res')

    if (inicio.length == 0 || fim.length == 0 || passo.length == 0) {
        res.innerHTML = `<strong>Impossível contar!<strong>`
    } else {
        res.innerHTML = `Contando: <br>`
        let i = Number(inicio)
        let f = Number(fim)
        let p = Number(passo)

        if(p <= 0) {
            window.alert(`Passo Inválido! Considenrando PASSO 1`)
            p = 1
        }
        
        if (i < f) {
        //Contagem Crescente
            for(let c = i; c <= f; c += p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
            res.innerHTML += `\u{1F3C1}`
        
        } else {
        //Contagem Regressiva
            for(let c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
            res.innerHTML += `\u{1F3C1}`
        }
    }

    
}