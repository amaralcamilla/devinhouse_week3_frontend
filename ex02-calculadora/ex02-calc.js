document.querySelector("#res").readOnly = true        

        function somar() {
            let tn1 = document.querySelector('#txtn1')
            let tn2 = document.querySelector('#txtn2')
            let res = document.querySelector('#res')
            let n1 = Number(tn1.value)
            let n2 = Number(tn2.value)
            let soma = n1 + n2
            res.innerHTML = soma
        }

        function subt() {
            let tn1 = document.querySelector('#txtn1')
            let tn2 = document.querySelector('#txtn2')
            let res = document.querySelector('#res')
            let n1 = Number(tn1.value)
            let n2 = Number(tn2.value)
            let sub = n1 - n2
            res.innerHTML = sub
        }

        function mult() {
            let tn1 = document.querySelector('#txtn1')
            let tn2 = document.querySelector('#txtn2')
            let res = document.querySelector('#res')
            let n1 = Number(tn1.value)
            let n2 = Number(tn2.value)
            let multi = n1 * n2
            res.innerHTML = multi
        }

        function divid() {
            let tn1 = document.querySelector('#txtn1')
            let tn2 = document.querySelector('#txtn2')
            let res = document.querySelector('#res')
            let n1 = Number(tn1.value)
            let n2 = Number(tn2.value)
            let divi = n1 / n2
            res.innerHTML = divi
        }