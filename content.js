document.addEventListener('click', (e) => {
  // Crear el elemento de imagen
  const img = document.createElement('img');
  
  // Obtener la ruta real de la imagen dentro de la extensión
  img.src = chrome.runtime.getURL('capibara.png');
  
  // Estilo para posicionarla donde hiciste clic
  img.classList.add('capibara-click');
  img.style.left = `${e.pageX - 25}px`; // Centrar imagen (asumiendo 50px ancho)
  img.style.top = `${e.pageY - 25}px`;
  
  document.body.appendChild(img);

  // Opcional: Eliminar la imagen después de 2 segundos
  setTimeout(() => img.remove(), 2000);
});