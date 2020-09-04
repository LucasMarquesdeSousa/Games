var reni = document.getElementById("res")
var campo = document.getElementsByClassName("campo")
var resutadoG = document.getElementById("menu")
var res = document.getElementById("res")
var jogador1 = "X"
var jogador2 = "O"
var jogadorVez = jogador1;
var gameover = false
var placarj1 = 0
var placarj2 = 0
var vetor = []
CarregarVez()
jogando()

function CarregarVez() {
    // carrega o menu do jogo e fica trocando do X para O e vice-versa 
    var ima = document.getElementById("h1")
    if (jogadorVez == jogador1) {
        ima.innerHTML = "<h1> Vez do jogador: <img class='foto' src='foto/X.jpg'></h1>"
    } else {
        ima.innerHTML = "<h1> Vez do jogador: <img class='foto' src='foto/O.png'></h1>"
    }
}
function jogando() {
    for (var i = 0; i < campo.length; i++) {
        campo[i].addEventListener("click", function () {
            if (this.getElementsByClassName("fotocampo").length == 0) {
                //metodo que fica vericando quando e qual usuário clicou no campo e controlar 
                if (gameover == false) {
                    if (jogadorVez == jogador1) {
                        this.innerHTML = "<img class='fotocampo' id='foto' src='foto/X.jpg'> "
                        this.setAttribute("jogador", jogador1)
                        var ti = this.getAttribute("jogador")
                        var u = this.getAttribute("value");
                        jogadorVez = jogador2
                    } else {
                        this.innerHTML = "<img class='fotocampo' id='foto' src='foto/O.png'> "
                        this.setAttribute("jogador", jogador2)
                        var ti = this.getAttribute("jogador")
                        var u = this.getAttribute("value");
                        jogadorVez = jogador1
                    }
                    
                }
            }
            CarregarVez();
            Ganhador(ti, u);
        })
    }
}
function Ganhador(ti, u) {
    //verificar o se o X ou O completou uma linha ou coluna
    vetor[u] = ti;
    if ((vetor[1] == vetor[2] && vetor[1] == vetor[3] && vetor[1] != undefined) || (vetor[1] == vetor[4] && vetor[1] == vetor[7] && vetor[1] != undefined) || (vetor[1] == vetor[5] && vetor[1] == vetor[9] && vetor[1] != undefined)) {
        var us = vetor
        ti = vetor[1]
        CalculaVencedor(ti, us)
    } else if ((vetor[2] == vetor[1] && vetor[2] == vetor[3] && vetor[2] != undefined) || (vetor[2] == vetor[5] && vetor[2] == vetor[8]) && vetor[2] != undefined) {
        var us = vetor
        ti = vetor[2]
        CalculaVencedor(ti, us)
    } else if ((vetor[3] == vetor[1] && vetor[3] == vetor[2] && vetor[3] != undefined) || (vetor[3] == vetor[6] && vetor[3] == vetor[9] && vetor[3] != undefined) || (vetor[3] == vetor[5] && vetor[3] == vetor[7] && vetor[3] != undefined)) {
        var us = vetor
        ti = vetor[3]
        CalculaVencedor(ti, us)
    } else if ((vetor[4] == vetor[5] && vetor[4] == vetor[6] && vetor[4] != undefined)) {
        var us = vetor
        ti = vetor[4]
        CalculaVencedor(ti, us)
    } else if (vetor[7] == vetor[8] && vetor[7] == vetor[9] && vetor[7] != undefined) {
        var us = vetor
        ti = vetor[7]
        CalculaVencedor(ti, us)
    }
    else if (vetor[1] && vetor[2] && vetor[3] && vetor[4] && vetor[5] && vetor[6] && vetor[7] && vetor[8] && vetor[9] != undefined) {
        var us = "Nenhum dos dois jogadores é o vencedor"
        ti = ""
        CalculaVencedor(ti, us)
    }
}
function CalculaVencedor(ti, u) {
    //função para verificar quem venceu e mostrar o placar
    if (ti == jogador1) {
        resutadoG.innerHTML = ""
        resutadoG.innerHTML = `<h1 class='ven'>Vencedor ${jogador1}</h1> <br>`
        placarj1 += 1
    } else if (ti == jogador2) {
        resutadoG.innerHTML = ""
        resutadoG.innerHTML = `<h1 class='ven'>Vencedor ${jogador2}<h1> <br>`
        placarj2 += 1
    } else if (ti == "") {
        resutadoG.innerHTML = ""
        resutadoG.innerHTML = `<h1 class='ven'>Game over<h1> <br>`
        placarj2 += 0
        placarj1 += 0
    }
    res.innerHTML = ""
    res.innerHTML += `<div class='asd'>Jogador X: ${placarj1}</div><br>`
    res.innerHTML += `<div class='asd'>Jogador O : ${placarj2}</div><br>`
    gameover = true
    var botao = document.createElement("button")
    botao.innerHTML = "Reniciar"
    botao.setAttribute("class", "reniciador")
    botao.setAttribute("onclick", "Reniciar()")
    reni.appendChild(botao)
}
res.innerHTML = ""
res.innerHTML += `<div class='asd'>Jogador X: ${placarj1}</div><br>`
res.innerHTML += `<div class='asd'>Jogador O : ${placarj2}</div><br>`
function Reniciar() {
    //função que renicia o campo de jogo para o estado do começo
    var campo2 = document.getElementsByClassName("campo")
    for (var i = 0; i < campo2.length; i++) {
        campo2[i].innerHTML = ""
        campo2[i].setAttribute("jogador", "")
    }
    jogadorVez = jogador1;
    gameover = false
    reni.innerHTML = ""
    vetor = []
    res.innerHTML = ""
    res.innerHTML = `<div class='asd'>Jogador X: ${placarj1}</div><br>`
    res.innerHTML += `<div class='asd'>Jogador O : ${placarj2}</div><br>`
    resutadoG.innerHTML = `
        <div value="1" class="campo" jogador=""> </div>
        <div value="2" class="campo" jogador=""> </div>
        <div value="3" class="campo" jogador=""> </div>

        <div value="4" class="campo"  jogador=""> </div>
        <div value="5" class="campo" jogador=""> </div>
        <div value="6" class="campo" jogador=""> </div>

        <div value="7" class="campo" jogador=""> </div>
        <div value="8" class="campo" jogador=""> </div>
        <div value="9" class="campo" jogador=""> </div>`
    CarregarVez()
    jogando()
}
