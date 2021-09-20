function parimp() {
    let n = document.getElementById('num').value
    let result = document.getElementById('result')
    if (n.length == 0){
        result.innerHTML = 'Insira um número!'   
    } else if (n%2 == 0) {
        result.innerHTML = 'Este número é par!'
    } else {
        result.innerHTML = 'Este número é ímpar!'
    } 
}