const contador = document.getElementById("count");

let num = 0;

contador.textContent = 0;

function reset() {
    num = 0;
    contador.innerHTML = num;
}

function restar() {
    num = num - 1;
    contador.innerHTML = num;
}

function sumar() {
    num = num + 1;
    contador.innerHTML = num;    
}
