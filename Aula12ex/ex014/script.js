function carregar() {
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora =  20 // data.getHours()
    msg.innerHTML = `Agora são ${hora} hora(s).`
    if (hora >= 0 && hora < 12) {
        // BOM DIA
        img.src = "fotomanha.jpg"
        document.body.style.background = '#F8DB00'
    }
        
    else if (hora >= 12 && hora <= 18) {
        // BOA TARDE
        img.src = "fototarde.jpg"
        document.body.style.background = '#FFBADC'
    }
        
    else {
        //BOA NOITE
        img.src = "fotonoite.jpg"
        document.body.style.background = '#07214B'
    }

}
