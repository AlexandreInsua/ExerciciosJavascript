
// Crear clase punto (mediante unha función)

var Punto = function (x, y) {
    this.x = x
    this.y = y

    this.mostrarCoordenadas = function () {
        return "(" + this.x + "," + this.y + ")"
    }

    this.calcularDistancia = function (outroPunto) {
        var dx = outroPunto.x - this.x
        var dy = outroPunto.y - this.y

        // return d = Math.sqrt(Math.pow(dx)+Math.pow(dy))
        return Math.hypot(dx, dy)
    }
}


function xenerarPuntosAleatorios(densidade = 100, coordenadaXMax, coordenadaYMax) {
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
    contexto.fillStyle = "rgba(" + r + "," + g + "," + b + "," + a + ")"  // establece el color 
    contexto.fillRect(x, y, 1, 1)  // dibuja un pixel
}

function dibujaLinea(context, x1, y1, x2, y2, r, g, b, a) {
    context.strokeStyle = 'rgba(${r}, ${g}, ${b}, ${a})';
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
        var numConexions = Math.random() * (4 - 0)
        for (var i = 0; i < numConexions; i++) {
            var numAleatorio = parseInt(Math.random() * puntos.lenght)
            var destino = puntos[numAleatorio]


            dibujaLinea(contexto, puntos[p].x, puntos[p].y, destino.x, destino.y, 255, 100, 0, 1)
        }
    }
}

function conectarConLinhasProximas(contexto, puntos) {
    for (p in puntos) {
        var numConexions = Math.random() * (4 - 0)
        for (var i = 0; i < numConexions; i++) {
            var numAleatorio = parseInt(Math.random() * puntos.lenght)
            var destino = puntos[numAleatorio]


            dibujaLinea(contexto, puntos[p].x, puntos[p].y, destino.x, destino.y, 255, 100, 0, 1)
        }
    }
}

function obterOsMaisProximos2(contexto, puntos) {

}

function conectarConLinhasProximas(contexto, puntos) {
    var conexions = []
    var cont = 0

    for (g in puntos) {
        var pu = puntos[g]
        var puntosOrdenados = puntos.sort((a, b) => { pu.calcularDistancia(a) - pu.calcularDistancia(b) })
        for (p in puntosOrdenados) {
            var numAleatorio = Math.random() * 4
            if (cont > numConexions) {
                break
            }
            if (p === g){
                break
            }
            dibujaLinea(contexto, g.x, g.y, p.x, p.y, 255, 100, 50, 0.3)
            cont++
        }
    }
}

var canvas = document.getElementById("canvas2D")
var context = canvas.getContext("2d")

var puntos = []
puntos = xenerarPuntosAleatorios(100, canvas.width, canvas.height)

pintarTodosPixeles(context, puntos)
conectarConLinhasProximas2(context, puntos)


