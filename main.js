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
