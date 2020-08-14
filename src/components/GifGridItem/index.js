import React from 'react';

export const GifGridItem = ( {id, title, images} ) => {
    console.log({id, title, images});
  return(
   <div>
     <img src={images} alt={title}/>
     <p>{title}</p>
   </div>
  );
};
