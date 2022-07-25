function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora <= 12 && hora < 18) {
        //BOM DIA
        img.src = 'manha.png'
        document.body.style.background = '#868d68'
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE
        img.src = 'tarde.png'
        document.body.style.background = '#f8a13e'
    } else {
        //BOA NOITE
        img.src = 'noite.png'
        document.body.style.background = '#002e58'
    }
}