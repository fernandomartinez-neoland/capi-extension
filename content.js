document.addEventListener('click', (e) => {
    // Crear el elemento de imagen
    const img = document.createElement('img');
const pokeId = Math.floor(Math.random() * 151) + 1;
    // Obtener la ruta real de la imagen dentro de la extensión
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
        .then(async (response) => {
            // se puede usar el ".then" para leer la respuesta, siendo que al ser el consumo de una api, esta siempre responde con una promesa, y si es una promesa el then debe tener una funcion asincrona y se debe usar el await parapoder leerlo
            // a la respuesta se le coloca un await al inicio y junto a la variable que representa la respuesta se coloca un .json() para poder leer el cuerpo de la respuesta (ya que este cuerpos esta en formato json)
            const pokeRespuesta = await response.json()

            // cada api tiene su tipo de respuesta, para esto sirve de mucho desarrollar la logica de programacion y el saber moverse en json (ya lo hemos visto en clase... ¬¬)
            img.src = pokeRespuesta.sprites.other["official-artwork"].front_default

            console.log(pokeRespuesta.sprites.other["official-artwork"].front_default)
        })
    // Estilo para posicionarla donde hiciste clic
    img.classList.add('capibara-click');
    img.style.left = `${e.pageX - 25}px`; // Centrar imagen (asumiendo 50px ancho)
    img.style.top = `${e.pageY - 25}px`;

    document.body.appendChild(img);

    // Opcional: Eliminar la imagen después de 2 segundos
    setTimeout(() => img.remove(), 2000);
});