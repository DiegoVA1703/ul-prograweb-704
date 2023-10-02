function ejecutarInstruccion() {
    const nombre = document.getElementById("nombre").value;
    const anho = document.getElementById("anho").value;
    const mensaje = nombre.concat(" - ", anho);
    
    const nuevoElemento = document.createElement("li");
    nuevoElemento.id = "nE";
    nuevoElemento.textContent = mensaje;

  
    // Agregar el nuevo elemento al final de la lista existente
    const listaModerno = document.getElementById("moderno");
    listaModerno.appendChild(nuevoElemento);
}
  
function ordenarListaAscendente() {
  const listaModerno = document.getElementById("moderno");
  const items = Array.from(listaModerno.querySelectorAll("li"));

  // Ordenar los elementos alfabéticamente
  items.sort(function (a, b) {
    return a.textContent.localeCompare(b.textContent);
  });

  // Eliminar elementos actuales
  for (let i = 0; i < items.length; i++) {
    listaModerno.removeChild(items[i]);
  }

  // Agregar elementos ordenados de nuevo
  for (let i = 0; i < items.length; i++) {
    listaModerno.appendChild(items[i]);
  }
}

  