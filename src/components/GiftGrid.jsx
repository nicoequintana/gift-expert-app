
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GiftItem } from "../components";


export const GifGrid = ( {category} ) => {

  const { images, isLoading } = useFetchGifs( category )

    return (
      <>
          <h3> { category } </h3>
          {/* aca hacemos la logica del isLoading, podriamos usar un ternario, o tambien un 'and logico', donde si isLoading es true muestra el cargando, sino salta directamente a mostrar llos gifs */}
          { isLoading && (<h2>Cargando...</h2>) }

          <div className="card-grid">
            {
              //en el argumento del .map(argumento) puedo poner por ejemplo, img y despues llamar a img.id y a img.title, o directamente lo desestructuro y obtengo las propiedades que me interesan como id, y title.
              images.map( ( img ) => (
                <GiftItem 
                  key={img.id}
                  //abajo paso la prop con spread operator, para poder tomarlo desde GiftItem y recibir ( { title, url } )
                  {...img}

                />
                )
              )
            }
          </div>
          
      </>
    )
}
