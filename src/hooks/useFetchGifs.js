//aca armamos el custom hook
import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {


  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  const getImages = async() => {
    const newImages = await getGifs( category );
    setImages( newImages );
    setIsLoading( false )
  }

  //el useEffect no puede tener promesas, es decir que no se puede usar ni async ni await//
    useEffect( () => {
      getImages();

    }, [] )


    return {
        images,
        isLoading
    }

}
