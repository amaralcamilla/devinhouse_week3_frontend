setInterval (function() {
    let horaagora = new Date()
    let hora = horaagora.getHours()
    let min = horaagora.getMinutes()
    let seg = horaagora.getSeconds()
    min = zero(min)
    seg = zero(seg)
    document.getElementById('hora').textContent = hora+':'+min+':'+seg
},1000)

function zero(x) {
    if (x < 10) {
        x = '0' + x;
    } return x;
}