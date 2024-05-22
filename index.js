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



// funcion que permite cambiar de letra al parametro simbolo
function validarGanar (simbolo){

    let flag = 0;

    // ciclo para ver las casillas vacias y validar el empate
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz.length; j++) {
            if (matriz[i][j].textContent != "") {
                flag++
            }
            
        }
    }
    // validacion de ganes de las filas
    if(matriz[0][2].textContent === simbolo && matriz[0][1].textContent === simbolo && matriz[0][0].textContent === simbolo){
        
        setTimeout(function() { 
            if(simbolo == "X"){
                alert ("has ganado")
            }else {
                alert ("Te han ganado")
            }
         },1000)
         return true
    }else if(matriz[1][0].textContent === simbolo && matriz[1][1].textContent === simbolo && matriz[1][2].textContent === simbolo){
        setTimeout(function() { 
            if(simbolo == "X"){
                alert ("has ganado")
            }else {
                alert ("Te han ganado")
            }
         },1000)
             return true
    }else if(matriz[2][2].textContent === simbolo && matriz[2][1].textContent === simbolo && matriz[2][0].textContent === simbolo){
        setTimeout(function() { 
            if(simbolo == "X"){
                alert ("has ganado")
            }else {
                alert ("Te han ganado")
            }
         },1000)
             return true


        // validacion de ganes de las colunmas
    }else if(matriz[0][0].textContent === simbolo && matriz[1][0].textContent === simbolo && matriz[2][0].textContent === simbolo){
        setTimeout(function() { 
            if(simbolo == "X"){
                alert ("has ganado")
            }else {
                alert ("Te han ganado")
            }
         },1000)
             return true
    }else if(matriz[0][1].textContent === simbolo && matriz[1][1].textContent === simbolo && matriz[2][1].textContent === simbolo){
        setTimeout(function() { 
            if(simbolo == "X"){
                alert ("has ganado")
            }else {
                alert ("Te han ganado")
            }
         },1000)
             return true
    }else if(matriz[0][2].textContent === simbolo && matriz[1][2].textContent === simbolo && matriz[2][2].textContent === simbolo){
        setTimeout(function() { 
            if(simbolo == "X"){
                alert ("has ganado")
            }else {
                alert ("Te han ganado")
            }
         },1000)
             return true


        // validacion de ganes de diagonales 
    }else if(matriz[0][0].textContent === simbolo && matriz[1][1].textContent === simbolo && matriz[2][2].textContent === simbolo){
        setTimeout(function() { 
            if(simbolo == "X"){
                alert ("has ganado")
            }else {
                alert ("Te han ganado")
            }
         },1000)
             return true
    }else if(matriz[0][2].textContent === simbolo && matriz[1][1].textContent === simbolo && matriz[2][0].textContent === simbolo){
        setTimeout(function() { 
            if(simbolo == "X"){
                alert ("has ganado")
            }else {
                alert ("Te han ganado")
            }
         },1000)
             return true


        //  calida el empate
    }else  if (flag == 9) {
        setTimeout(function() {  
             alert ("Empate")},1000)
        return true
    }
return false
 

    // console.log(matriz);

}


// funcion para crear un elemento (NO IMPLEMENTADA)
// function mostrarMensaje(mensaje) {
//     document.getElementById('message').innerHTML = mensaje;
// }

// // let mensajeWin = document.getElementById('message').textContent = "Te han ganado"




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
                    let ganeX = validarGanar("X") // le da a la funcion el valor de "X"
                    console.log(matriz,"soy la matriz");
                    console.log(ganeX);
                    if (!ganeX) {
                        let maquina = aleatorio(); // busca un espacio vacio para la maquina
                    setTimeout(function() {

                        if (maquina !== null) {
                            gato[maquina].innerHTML = "O"; // si la casilla esta vacia marca con una "O"
                            let ganaO = validarGanar("O") // le da a la funcion el valor de "O"
                        }
                    }, 800); 
                   
                    }
                    
                                    
                  
                    
                
                }
 

        })
        
} 



function validarFilas() {
    for (let j = 0; j < gato.length; j++) {
        for (let i = 0; i < gato.length; i++) {
            
        }        
    }
}

