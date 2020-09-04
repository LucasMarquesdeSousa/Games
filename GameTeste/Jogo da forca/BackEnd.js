var palavra = ""
var dica = ""
//validar os dados digitados pelo usuário
//while (palavra.length < 2 && dica.length < 2) {
palavra = prompt("digite a palavra valida e ela tem que ser maior que 2 caracteres")
dica = prompt("digite uma dica valida e ela tem que ser maior que 2 caracteres")
//}
//variáveis e vetores
var resultado = document.getElementById("res")
var clics = document.getElementsByClassName("teclado")
var palavraM = document.getElementById("palavraM")
let letrasAlfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var LetrasDigitadas = []
let palaUsu = []

//separando as palavras digitadas pelo usuário
for (var i = 0; i < palavra.length; i++) {
    palaUsu[i] = palavra[i].toUpperCase();
}
console.log(palaUsu)
//criando as teclas para o jogador apertar
for (var i = 0; i < 26; i++) {
    var objeto = document.createElement("button")
    objeto.setAttribute("value", `${letrasAlfabeto[i]}`)
    objeto.setAttribute("class", "teclado")
    objeto.style.background = "white"
    objeto.style.width = "7%"
    objeto.style.height = "40%"
    objeto.style.marginLeft = "0.6%"
    objeto.style.marginTop = "1%"
    objeto.innerHTML = letrasAlfabeto[i];
    resultado.appendChild(objeto)
}

//saber qual tecla do teclado virtual o usuario apertou
for (var i = 0; i < clics.length; i++) {
    clics[i].addEventListener("click", function () {
        if (LetrasDigitadas.length < 26 && LetrasDigitadas.indexOf(this.value) == -1) {
            LetrasDigitadas.push(this.value)
            //console.log(palaUsu.indexOf(this.value))
            if (palaUsu.indexOf(this.value) >= 0) {
                console.log(palaUsu.indexOf(this.value))
                //formar os quadrados para colocar as letras e formar a palavra certa
               /* for (var i = 0; i < palaUsu.length; i++) {
                    //palavraM.innerHTML += `${this.value}`
                    var div = document.createElement("div")
                    div.setAttribute("value", i)
                    div.style.width = "40px"
                    div.style.height = "40px"
                    div.style.background = "red"
                    div.style.float = 'left'
                    div.style.marginLeft = "2%"
                    palavraM.appendChild(div)
                }*/
            }   
        }
    })
}
for(var i = 0; i < palaUsu.length; i++){
    var div = document.createElement("div")
    div.setAttribute("value",i)
    div.style.width = "40px"
    div.style.height="40px"
    div.style.background="red"
    div.style.float="left"
    div.style.marginLeft = "2%"
    palavraM.appendChild(div)
}
