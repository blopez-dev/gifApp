import React from 'react';
import {Title} from './style'


export const GifGridItem = ( {id, title, images} ) => {
  return(
   <div>
     <img src={images} alt={title}/>
     <Title>{title}</Title>
   </div>
  );
};
