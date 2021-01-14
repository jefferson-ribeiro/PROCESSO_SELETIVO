function calcular(){
    var m = document.getElementById (`nMulheres`)
    var h = document.getElementById (`nHomens`)
    var c = document.getElementById (`nCriancas`)
    var res = document.getElementById (`res`)

    if (m.value.length == 0 || h.value.length == 0 || c.value.length == 0 ) {
        window.alert (`[ERRO] Faltam dados!`)
    } else {
        var mQnt = Number(m.value)
        var hQnt = Number(h.value)
        var cQnt = Number(c.value)

        res = mQnt + hQnt + cQnt

        res.innerHTML += `Total de Pessoas ${res}`
        res.innerHTML = `Total de Carne g`
        res.innerHTML = `Acompanhamentos`
        res.innerHTML = `Bebidas alcóolicas`
        res.innerHTML = `Bebidas não alcóolicas`
    }

    
}


