



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


const matriz = [
    [boton1, boton2, boton3],
    [boton4, boton5, boton6],
    [boton7, boton8, boton9]
];
// matriz[0][0] = "x"
console.log(matriz);



let validar1 = true

boton1.addEventListener('click',function(){
    if(validar1 === true){
        if(boton1 == ''){
            boton1.innerHTML = "X"
        }
        else{
            
        }
    
    }
    console.log("boton1");
})

boton2.addEventListener('click',function(){
    boton2.innerHTML = "X"
    console.log("boton2");
})

boton3.addEventListener('click',function(){
    boton3.innerHTML = "X"
    console.log("boton3");
})

boton4.addEventListener('click',function(){
    boton4.innerHTML = "X"
    console.log("boton4");
})

boton5.addEventListener('click',function(){
    boton5.innerHTML = "X"
    console.log("boton5");
})

boton6.addEventListener('click',function(){
    boton6.innerHTML = "X"
    console.log("boton6");
})

boton7.addEventListener('click',function(){
    boton7.innerHTML = "X"
    console.log("boton7");
})

boton8.addEventListener('click',function(){
    boton8.innerHTML = "X"
    console.log("boton8");
})

boton9.addEventListener('click',function(){
    boton9.innerHTML = "X"
    console.log("boton9");
})