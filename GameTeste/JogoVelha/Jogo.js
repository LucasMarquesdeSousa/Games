var player1 = "X"
var player2 = "O"
var inicio = player1;
var playerAhora = player1;
var gameover = false;
CarregarTI()
QuemClicou()
function CarregarTI() {
    var cli = document.getElementById("ti");
    if (playerAhora == "X") {
        cli.innerHTML = "<h1>vez do jogador: <img  class='foto' src='imagens/X.jpg'/></h1>";
    } else {
        cli.innerHTML = "<h1>vez do jogador: <img  class='foto' src='imagens/O.png'/></h1>"
    }

}
function QuemClicou() {
    var ima = document.getElementsByClassName("tab");
    for (var i = 0; i < ima.length; i++) {
        ima[i].addEventListener("click", function () {
            if (gameover) { return; }
            if (this.getElementsByTagName("img").length == 0) {
                if (playerAhora == "X") {
                    this.innerHTML = "<img src='imagens/X.jpg' width='20px'/>"
                    this.setAttribute("jogador", player1)
                    playerAhora = player2;
                } else {
                    this.innerHTML = "<img src='imagens/O.png' width='20px'/>"
                    this.setAttribute("jogador", player2)
                    playerAhora = player1;
                }
                CarregarTI();
                Ganhador();
            }
        })
    }

}
function Ganhador() {
    var a1 = document.getElementById("a1").getAttribute("jogador")
    var a2 = document.getElementById("a2").getAttribute("jogador")
    var a3 = document.getElementById("a3").getAttribute("jogador")

    var b1 = document.getElementById("b1").getAttribute("jogador")
    var b2 = document.getElementById("b2").getAttribute("jogador")
    var b3 = document.getElementById("b3").getAttribute("jogador")

    var c1 = document.getElementById("c1").getAttribute("jogador")
    var c2 = document.getElementById("c2").getAttribute("jogador")
    var c3 = document.getElementById("c3").getAttribute("jogador")

    var placar = document.getElementById("placar")

    var vencedor = "";

    if ((a1 == b1 && a1 == c1 && a1 != "") || (a1 == a2 && a1 == a3 && a1 != "") || (a1 == b2 && a1 == c3 && a1 != "")) {
        vencedor = a1;
        var ganhar = document.getElementById("ganhar")
        ganhar.innerHTML = " vencedor é: " + vencedor
        //alert(`vencedor${vencedor} Por favor renicie a página`)
        gameover = true;
    } else if ((b2 == b1 && b2 == b3 && b2 != "") || (b2 == a2 && b2 == c2 && b2 != "") || (b2 == c1 && b2 == a3 && b2 != "")) {
        vencedor = b2;
        var ganhar = document.getElementById("ganhar")
        ganhar.innerHTML = " O vencedor é: " + vencedor
        //alert(`vencedor${vencedor} Por favor renicie a página`)
        gameover = true;
    } else if ((c3 == c2 && c3 == c1 && c3 != "") || (c3 == a3 && c3 == b3 && c3 != "")) {
        vencedor = c3;
        var ganhar = document.getElementById("ganhar")
        ganhar.innerHTML = "O vencedor é: " + vencedor

        //alert(`vencedor${vencedor} Por favor renicie a página`)
        gameover = true;
    } else {
        if (a1 != "" && a2 != "" && a3 != "" && b1 != "" && b2 != "" && b3 != "" && c1 != "" && c2 != "" && c3 != "") {
            var ganhar = document.getElementById("ganhar")
            ganhar.innerHTML = "game over <br>"
            playerAhora = "";
            //alert(`vencedor${vencedor} Por favor renicie a página`)
            gameover = true;
        }
    }
    if (vencedor != "") {
        var ponto1 = 0
        var ponto2 = 0
        if (vencedor == player1) {
            ponto1 = ponto1 +1
        } else if (vencedor == player2) {
            ponto2 = ponto2 + 1
        }
        placar.innerHTML = `jogador1 :${ponto1 }<br>Jogador2: ${ponto2}`
        var reni = document.getElementById("reniciar") 
        reni.innerHTML = `<div type='button' class='reni' onclick='Reniciar()'></div>`   
    }
}

