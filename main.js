const password=[];
for(let i = 0; i<5;i++){
    const number = (Math.floor(Math.random() * 10));
    password.push(number);
}

//ACCEDEMOS AL ROOT-----------------------
const root = document.getElementById('root');
//CREAMOS EL TITULO ---------------------

const title = document.createElement('h1');
title.id = 'title';
title.innerText = 'DanielNumber';
root.appendChild(title);
//CREAMOS EL GAME BOARD --------------------

const tablero = document.createElement('div')
tablero.id = 'tablero';
root.appendChild(tablero);

for(let i = 0; i<6; i++){
    const fila = document.createElement('div');
    fila.classList.add('fila');
    tablero.appendChild(fila);

    for(let j = 0; j<5; j++){
        const celda = document.createElement('div');
        celda.classList.add('celda');
        fila.appendChild(celda)
    }
}
//-----------------CREATE KEYPAD ---------------------
const teclado = document.createElement('div');
teclado.id='teclado';
root.appendChild(teclado);

//--------------Insertar el enter-----------
const enter = document.createElement('div');
enter.id='enter';
enter.innerText = 'Enter'
teclado.appendChild(enter);

//------------------ insertamos los 10 numeros
for(let i = 0; i<10;i++){
    const numero = document.createElement('div');
    numero.classList.add('numero')
    numero.id = i;
    numero.innerText = i;
    teclado.appendChild(numero);
}
//-------------- creamos el borrado -------------
const borrado = document.createElement('div');
borrado.id = 'borrado';
borrado.innerText='back'
teclado.appendChild(borrado);
// EMPEZAMOS LA LOGICA DEL TRABAJO

let i = 0; // will count rows
let h = 0; // will count columns

function obtenerNumero(e){
    
    elementosFila = document.getElementsByClassName('fila')[h].getElementsByClassName('celda');
    console.log(elementosFila)
    const gotNumber = e.target.innerText;

    if(gotNumber === "Enter" && i >= 5){
        guess = getGuess(elementosFila)
        checkNumber(guess,password);
        h++; //Mueve a la siguiente fila
        i=0; // resetea la columna para empezar de nuevo
    }
        
    else if(gotNumber.length >5 || gotNumber==='Enter' && i >5){
    }
    //controlamos el back button
    else if(gotNumber === "back"){
        if(i >0 && i <=5){
            i--;
            elementosFila[i].innerText='';
            elementosFila[i].style.borderColor='lightgrey';
        }
    }
    else if(i >=5){
        i=5;
    }
    else{
        elementosFila[i].innerText = gotNumber;
        elementosFila[i].style.borderColor = 'grey';
        i++;
    }
}
if(i<5){
    teclado.onclick = obtenerNumero;
}

function getGuess(elementosFila){
    const guess = [];
    for (let i = 0; i < elementosFila.length; i++) {
      const number = elementosFila[i].innerText;
      guess.push(number);
    }
    return guess;
  }


  function checkNumber(guess, password){
    const passwordCopy=[];

    let i;

    for(i=0; i<password.length;i++){
        passwordCopy.push(password[i])
    }

    let celdaActual; 
    
    for(let j = 0; j<guess.length;j++){
        const number = parseInt(guess[j]);
        
        celdaActual = elementosFila[j];

        if(number === password[j]){
            delete passwordCopy[passwordCopy.indexOf(number)]
        }
    }

    for (let k = 0; k< guess.length; k++){
        const number = parseInt(guess[k]);
        celdaActual = elementosFila[k];

        if(number===password[k]){
            celdaActual.style.color = 'white';
            celdaActual.style.backgroundColor = '#6BAA64';
            celdaActual.style.borderColor = '#6BAA64';
        } else if 
            (passwordCopy.includes(number)){
            celdaActual.style.color = 'white';
            celdaActual.style.backgroundColor = '#C9B458';
            celdaActual.style.borderColor = '#C9B458';
            delete passwordCopy[passwordCopy.indexOf(number)];
          } else{
            celdaActual.style.color = 'white';
            celdaActual.style.backgroundColor = 'grey';
          }
    }

    let passwordSupuesta = true;
    for (let i = 0; i < passwordCopy.length; i++) {
        passwordCopy[i] === undefined ? passwordSupuesta : passwordSupuesta = false;
        
    }
    if (passwordSupuesta ){
        alert('You win!');
  }
}
