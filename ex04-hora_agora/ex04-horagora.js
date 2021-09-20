var clock = new Date()
var hora = clock.getHours()
var min = clock.getMinutes()
var seg = clock.getSeconds()

min = zero(min)
seg = zero(seg)

function zero(x) {
    if (x < 10) {
        x = '0' + x;
    } return x;
}
rel.innerHTML = hora+':'+min