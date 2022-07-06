function contar () {
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert("[ERRO] Faltam dados!")
        res.innerHTML= "Impossível contar!"
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
         window.alert('Passo Inválido! Vamos considerar PASSO = 1')
         p = 1
        } 
        if (i < f) {

            for(let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F635} `
            }      
        } else {
            for(let c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} \u{1F635} `
            }    
        }
        res.innerHTML += ` \u{1F92E} `
    }
}