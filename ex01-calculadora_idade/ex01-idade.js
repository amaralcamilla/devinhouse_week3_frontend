function calcular() {
    var nasc = document.getElementById('datanasc').value 
    var nd = new Date (nasc)
    var anond = nd.getFullYear()
    var mesnd = nd.getMonth() + 1
    var diand = nd.getDate()
    
    var res = document.getElementById('res')
    var dataatual = new Date()
    var anoatual = dataatual.getFullYear()
    var mesatual = dataatual.getMonth() + 1
    var diaatual = dataatual.getDate()
    /*var anonascp = nasc.split('/')
    var dianasc = anonascp[0]
    var mesnasc = anonascp[1]
    var anonasc = anonascp[2]
    */
    var idade = anoatual - anond
    if (mesatual < mesnd) {
        idade --
    } else if (mesatual == mesnd && diaatual < diand) {
        idade --        
    }   
    res.innerHTML = `Você tem ${idade} anos.`
}
