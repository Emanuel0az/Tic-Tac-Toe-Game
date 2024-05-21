let gato = document.getElementsByClassName('cell')//son los 9 contenedores


// llama a los 9 contenedores por su id
let boton1 = document.getElementById('boton1')
let boton2 = document.getElementById('boton2')
let boton3 = document.getElementById('boton3')
let boton4 = document.getElementById('boton4')
let boton5 = document.getElementById('boton5')
let boton6 = document.getElementById('boton6')
let boton7 = document.getElementById('boton7')
let boton8 = document.getElementById('boton8')
let boton9 = document.getElementById('boton9')


// es una matriz que contiene las 9 casillas del juego
let matriz = [
    [boton1, boton2, boton3],
    [boton4, boton5, boton6],
    [boton7, boton8, boton9]
]
console.log(matriz);

function validarGaneX (){

    let flag = 0;
    // validacion de ganes de las filas
    if(matriz[0][2].textContent === "X" && matriz[0][1].textContent === "X" && matriz[0][0].textContent === "X"){
        setTimeout(function() { 
        return alert ("has ganado")},1000)
    }else if(matriz[1][0].textContent === "X" && matriz[1][1].textContent === "X" && matriz[1][2].textContent === "X"){
        setTimeout(function() { 
            return alert ("has ganado")},1000)
    }else if(matriz[2][2].textContent === "X" && matriz[2][1].textContent === "X" && matriz[2][0].textContent === "X"){
        setTimeout(function() { 
            return alert ("has ganado")},1000)


        // validacion de ganes de las colunmas
    }else if(matriz[0][0].textContent === "X" && matriz[1][0].textContent === "X" && matriz[2][0].textContent === "X"){
        setTimeout(function() { 
            return alert ("has ganado")},1000)
    }else if(matriz[0][1].textContent === "X" && matriz[1][1].textContent === "X" && matriz[2][1].textContent === "X"){
        setTimeout(function() { 
            return alert ("has ganado")},1000)
    }else if(matriz[0][2].textContent === "X" && matriz[1][2].textContent === "X" && matriz[2][2].textContent === "X"){
        setTimeout(function() { 
            return alert ("has ganado")},1000)


        // validacion de ganes de diagonales 
    }else if(matriz[0][0].textContent === "X" && matriz[1][1].textContent === "X" && matriz[2][2].textContent === "X"){
        setTimeout(function() { 
            return alert ("has ganado")},1000)
    }else if(matriz[0][2].textContent === "X" && matriz[1][1].textContent === "X" && matriz[2][0].textContent === "X"){
        rsetTimeout(function() { 
            return alert ("has ganado")},1000)



    }

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz.length; j++) {
            if (matriz[i][j].textContent != "") {
                flag++
            }
            
        }
    }

    console.log(matriz);
    if (flag == 9) {
        setTimeout(function() { 
            return alert ("Empate")},1000)
        
    }
   

}



function mostrarMensaje(mensaje) {
    document.getElementById('message').textContent = mensaje;
}

// let mensajeWin = document.getElementById('message').textContent = "Te han ganado"

function validarGaneO() {
        // validacion de ganes de las filas
    if (matriz[0][2].textContent === "O" && matriz[0][1].textContent === "O" && matriz[0][0].textContent === "O") {
        return mostrarMensaje("Te han ganado");

    } else if (matriz[1][0].textContent === "O" && matriz[1][1].textContent === "O" && matriz[1][2].textContent === "O") {
        return mostrarMensaje("Te han ganado");

    } else if (matriz[2][2].textContent === "O" && matriz[2][1].textContent === "O" && matriz[2][0].textContent === "O") {
        return mostrarMensaje("Te han ganado");


        // validacion de ganes de las colunmas
    } else if (matriz[0][0].textContent === "O" && matriz[1][0].textContent === "O" && matriz[2][0].textContent === "O") {
        return mostrarMensaje("Te han ganado");

    } else if (matriz[0][1].textContent === "O" && matriz[1][1].textContent === "O" && matriz[2][1].textContent === "O") {
        return mostrarMensaje("Te han ganado");

    } else if (matriz[0][2].textContent === "O" && matriz[1][2].textContent === "O" && matriz[2][2].textContent === "O") {
        return mostrarMensaje("Te han ganado");


        // validacion de ganes de diagonales 
    } else if (matriz[0][0].textContent === "O" && matriz[1][1].textContent === "O" && matriz[2][2].textContent === "O") {
        return mostrarMensaje("Te han ganado");

    } else if (matriz[0][2].textContent === "O" && matriz[1][1].textContent === "O" && matriz[2][0].textContent === "O") {
        return mostrarMensaje("Te han ganado");
    }
}






// funcion para las casillas vacias de forma aleatorias
function aleatorio() {

    let espacio = [];// encuentra las casillas vacias del array
    // itera sobre las cassillas del array
    for (let index = 0; index < gato.length; index++) {
        // verifica si cada cassilla esta vacia
        if (gato[index].innerHTML === "") {
            espacio.push(index);
        }
    }

    // verifica si hay casillas vacias y elige una de forma aleatoria
    if (espacio.length > 0) {
        let index2 = Math.floor(Math.random() * espacio.length); // obtiene un espacio vacio para que la maquina juege de forma aleatoria

        return espacio[index2]; //retorna el array vacio con el metodo random
    }
    return null; //busca una casilla vacia en el i y si no hay devuelbe nulo
}
        
// itera sobre las casillas del array
for (let index = 0; index < gato.length; index++) {
        // le da un evento de clic a cada una de las casillas
        gato[index].addEventListener('click', function() {
                // verifica si la casilla esta vacia para marcar
                if (gato[index].innerHTML === "") {
                    gato[index].innerHTML = "X"; // agrega una "X" a la casilla vacia
                    console.log(matriz,"soy la matriz");
                    validarGaneX()

                    let maquina = aleatorio(); // busca un espacio vacio para la maquina
                    setTimeout(function() {
                        if (maquina !== null) {
                            gato[maquina].innerHTML = "O"; // si la casilla esta vacia marca con una "O"
                            validarGaneO()
                        }
                    }, 1000);
                }
                
        })
        
} 



function validarFilas() {
    for (let j = 0; j < gato.length; j++) {
        for (let i = 0; i < gato.length; i++) {
            
        }        
    }
}

