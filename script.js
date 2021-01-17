function calcular(){
    //Pessoas
    var m = document.getElementById (`nMulheres`)
    var h = document.getElementById (`nHomens`)
    var c = document.getElementById (`nCriancas`)
    //Bebidas
    var cerv = document.getElementById (`nCerveja`)
    var refr = document.getElementById (`nRefrigerante`)
    //Acompanhamento
    var facomp = document.getElementById (`acomp`)
    //Resultado
    var res = document.getElementById (`res`)

    if (m.value.length == 0 || h.value.length == 0 || c.value.length == 0 ) {
        window.alert (`[ERRO] Faltam dados!`)
    } else {
        
        // Converter em número
        var mQnt = Number(m.value)
        var hQnt = Number(h.value)
        var cQnt = Number(c.value)
        var cervQnt = Number(cerv.value)
        var refrQnt = Number(refr.value)

        //Total de pessoas
        pessTotal = mQnt + hQnt + cQnt

        //Total de carne
        carneTotal = (mQnt*500) + (hQnt*800) + (cQnt*300)

        //Total de Acompanhamentos
        if (facomp.checked) {
            acompTotal = (mQnt*200) + (hQnt*300) + (cQnt*100)
            acompTotal = `${acompTotal}g`
        } else { 
            acompTotal = `Não haverá acompanhamentos`
        }

        //Total bebidas alcoolicas
        nCerv = cervQnt*5

        //Total de bebidas não alcoolicas
        nRefr = refrQnt*3

        //Resultado
        res.innerHTML = `<p>Total de pessoas: ${pessTotal}</p>`
        res.innerHTML += `<p>Total de Carne: ${carneTotal}g</p>`
        res.innerHTML += `<p>Acompanhamentos: ${acompTotal}</p>`
        res.innerHTML += `<p>Bebidas alcóolicas: ${nCerv}L</p>`
        res.innerHTML += `<p>Bebidas não alcóolicas: ${nRefr}L</p>`
        res.innerHTML += `<p>© JEFFERSON RIBEIRO - Processo Seletivo - Itaú</p>`
    }

    
}


