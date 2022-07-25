function gerar(){
    var numero = document.getElementById('numero').value
    var res = document.getElementById('tabuada')

    if(numero.length <= 0){
        window.alert(`Tabuada inválida!`)
    } else {
        let n = Number(numero)
        res.innerHTML=``
        for(let c = 1; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${numero*c}`
            res.appendChild(item)
        }
    }

}