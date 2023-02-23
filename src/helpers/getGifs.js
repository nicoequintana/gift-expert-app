//esta es la funcion que llama a la api de Giphy, pero en vez de tenerla en el componente de GifGrid, para que no quede sucio ese componente, me lo traigo a un js aparte dentro de esta carpeta 'helpers' y lo importa en GifGrid, entonces esto si es una buena practica.

export const getGifs = async( category ) => {
    const url =`https://api.giphy.com/v1/gifs/search?api_key=2WDdBSFWmkDZFKxuqjqkDMe9JSPDgs8p&q=${category}&limit=10`

    const resp = await fetch ( url );
    const { data } = await resp.json();
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    

    return gifs;
}