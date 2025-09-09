// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let amigo = document.getElementById('amigo').value;

    if (amigo=="") {
        alert("Por favor, inserte un nombre.");
    } else {
        amigos.push(amigo);
        document.getElementById('amigo').value = "";        
    }
    actualizarListaAmigos();
}

function actualizarListaAmigos() {
   let lista = document.getElementById('listaAmigos');
   lista.innerHTML = "";
   for (let i = 0; i < amigos.length; i++) {
    let nuevoLi = document.createElement("li");
    nuevoLi.innerText = amigos[i];
    lista.appendChild(nuevoLi);    
   }
}
