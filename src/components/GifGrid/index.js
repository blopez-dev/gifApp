import React, {useState, useEffect} from 'react';
import { GifGridItem } from '../GifGridItem/index'

export const GifGrid = ({category}) => {

  const [images, setImages] = useState([]);


  useEffect( ()=> {
    petition();
  }, []);

  const petition = async() => {
    const url = 'https://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=10&api_key=Z7oS0VAmrso597M5z15ueE4OtA1D4pBz';
    const resp = await fetch(url);
    const {data} = await resp.json();

    const results = data.map( img => { // desgloso el objeto data en los elementos que necesito, el id, el títle y las images por ejemplo
      return {
        id: img.id,
        title: img.title,
        images: img.images.downsized_medium.url
      }
    });

    setImages(results);  // actualizado el estado unicial 'images' con el resultado de la vaariable results. LLeno el array vacio con un objeto
  };

  return(
   <>
      <h3> {category} </h3>
        {
         images.map( (img) => (
           <GifGridItem key={img.id} {...img}/>
         ))
           // desgloso el array images, extrayendo sólo aquello que necesitl
        }

    
   </>
  );


};
