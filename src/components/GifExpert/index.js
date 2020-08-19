import React, {useState} from 'react';
import styled from 'styled-components';
import {AddCategory} from '../addCategory'
import {GifGrid} from '../GifGrid'

import {Title} from './style';

export const GifExpert = () => {

  const [categories, setCategories] = useState(['One Punch']);


  return(
   <>
     <Title>
       <h3>Gif Expert Component</h3>
     </Title>
     <AddCategory setCategories={setCategories}/>
     <hr/>

     <ol>
     {
       categories.map( category => <GifGrid key={category} category={category}/>)
     }
     </ol>
   </>
  );

};

