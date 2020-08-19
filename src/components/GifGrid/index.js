import React from 'react';
import {useFetchGifs} from '../../hooks/useFetchGifs'
import { GifGridItem } from '../GifGridItem/index'


import {GridResults} from './style'

export const GifGrid = ({category}) => {
  const {data, loading} = useFetchGifs(category);

  return(
    <>
      <h3> {category} </h3>
      <GridResults>
        {
         data.map( img => (
           <GifGridItem key={img.id} {...img}/>  // desgloso el array images, extrayendo sólo aquello que necesitl
         ))
        }
   </GridResults>
      </>
  );


};
