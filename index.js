



let gato = document.getElementsByClassName('cell')


// function letra() {
//     console.log("funciona");
// }

let boton1 = document.getElementById ('boton1')
let boton2 = document.getElementById ('boton2')
let boton3 = document.getElementById ('boton3')
let boton4 = document.getElementById ('boton4')
let boton5 = document.getElementById ('boton5')
let boton6 = document.getElementById ('boton6')
let boton7 = document.getElementById ('boton7')
let boton8 = document.getElementById ('boton8')
let boton9 = document.getElementById ('boton9')
let text_0 = "O"
let text_x = "X"
let jugador = text_0


const matriz = [
    [boton1, boton2, boton3],
    [boton4, boton5, boton6],
    [boton7, boton8, boton9]
] 
// matriz[0][0] = "x"
console.log(matriz);

let index2;

for (let index = 0; index < gato.length; index++) {
   
    gato[index].addEventListener('click',function(){
        
        gato[index].innerHTML= "X";

        
        if ( gato[index2] != "") {
            index2 =  Math.floor(Math.random() * 9)
            gato[index2].innerHTML ="O"
           
           
        }else{
            index2 =  Math.floor(Math.random() * 9)
            gato[index2].innerHTML ="O"
        }
       
        



    })
        
}   