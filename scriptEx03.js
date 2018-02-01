
// Crear clase punto (mediante unha función)

var Punto = function (x, y) {
    this.x = x
    this.y = y
    this.angulo = 0
    this.calcularDistancia = function (outroPunto) {
        var dx = outroPunto.x - this.x
        var dy = outroPunto.y - this.y

        // return d = Math.sqrt(Math.pow(dx)+Math.pow(dy))
        return Math.hypot(dx, dy)
    }
}


function xenerarPuntosAleatorios(densidade = 20, coordenadaXMax, coordenadaYMax) {
    var puntos = []
    for (i = 0; i < densidade; i++) {
        var aleatorioX = Math.random() * coordenadaXMax
        var aleatorioY = Math.random() * coordenadaYMax

        // reparar en que para instanciar se usa o nome da clase 
        var p = new Punto(aleatorioX, aleatorioY)
        puntos.push(p)
    }
    return puntos
}

function pintarPixel(contexto, x, y, r = 0, g = 0, b = 0, a = 1) {
    contexto.fillStyle = "rgba(" + r + "," + g + "," + b + "," + a + ")"  // establece a cor 
    contexto.fillRect(x, y, 1, 1)  // debuxa un pixel
}

function dibujaLinea(context, x1, y1, x2, y2, r, g, b, a) {
    context.strokeStyle = `rgba(${r}, ${g}, ${b}, ${a})`;
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
}

function pintarTodosPixeles(contexto, puntos) {
    for (p in puntos) {
        pintarPixel(contexto, puntos[p].x, puntos[p].y)
    }
}


function conectarConLinhas(contexto, puntos) {
    for (p in puntos) {
        var numConexions = Math.random() * 8 - 4 + 4
        for (var i = 0; i < numConexions; i++) {
            var numAleatorio = parseInt(Math.random() * puntos.lenght)
            var destino = puntos[numAleatorio]
            dibujaLinea(contexto, puntos[p].x, puntos[p].y, destino.x, destino.y, 255, 0, 0, 0.3)
        }
    }
}

function conectarConLinhasProximas(contexto, puntos) {
    for (g in puntos) {
        var cont = 0
        var pu = puntos[g]
        var puntosOrdenados = puntos.sort((a, b) => (pu.calcularDistancia(a) - pu.calcularDistancia(b)))
        var r = corAleatorio()
        var g = corAleatorio()
        var b = corAleatorio()
        var a = 1

        for (p in puntosOrdenados) {
            var numConexions = parseInt(Math.random() * 16 - 4 + 4)
            if (cont >= numConexions) {
                break
            }
            dibujaLinea(contexto, pu.x, pu.y, puntos[p].x, puntos[p].y, r, g, b, a)
            cont++
        }
    }
}
function moverPixeles(puntos) {
    for (p in puntos) {
        pu = puntos[p]


        if (Math.round(Math.random() * 7) == 0) { // cando se obteña o cero cambia o angulo
            novoAngulo = Math.random() * (2 * Math.pi() - 0) + 0
            pu.angulo = novoAngulo
        }
        var vel = Math.random() * ((12 - 0.1) + 0.1)
        pu.x += vel * Math.cos(pu.angulo)
        pu.y += ver * Math.sin(pu.angulo)
    }
}

function corAleatorio() {
    return parseInt(Math.random() * 255)
}

function alfaAleatorio() {
    return Math.random()
}


var canvas = document.getElementById("canvas2D")
var contexto = canvas.getContext("2d")

var puntos = []
puntos = xenerarPuntosAleatorios(100, canvas.width, canvas.height)

setInterval

function pasos() {
    contexto.clearRect(0, 0, canvas.width, canvas.height)
    conectarConLinhasProximas(contexto, puntos)
    moverPixeles(puntos)
    pintarTodosPixeles(contexto, puntos)
}

setInterval(pasos, 1000 / 24)



