function carregar() {
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')
    let data = new Date()
    let dia = data.getUTCDate()
    let mes = data.getUTCMonth()
    if (mes == 12 && dia >= 22 || mes == 03 && dia <= 21 || mes == 1 || mes == 2) {
        msg.innerHTML = 'Verão &#x2600'
        img.src = 'fotoverao.png'
        document.body.style.background = '#fcee8e'
    } else if (mes == 03 && dia >= 22 || mes == 06 && dia <= 21 || mes == 4 || mes == 5) {
        msg.innerHTML = 'Outono &#9753'
        img.src = 'fotooutono.png'
        document.body.style.background = '#d7b589'
    } else if (mes == 06 && dia >= 22 || mes == 09 && dia <= 21 || mes == 7 || mes == 8) {
        msg.innerHTML = 'Inverno &#x2744'
        img.src = 'fotoinverno.png'
        document.body.style.background = '#c1c3d2'
    } else {
        msg.innerHTML = 'Primavera &#x2740'
        img.src = 'fotoprimavera.png'
        document.body.style.background = '#f1cae1'
    }
}
