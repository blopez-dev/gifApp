import React, {useState} from 'react';
import PropTypes from 'prop-types'
import {Searcher} from './style';

import styled from 'styled-components';


export const AddCategory = ({setCategories}) => {

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue( e.target.value );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(inputValue.trim().length > 2){
      setCategories(categories => [...categories, inputValue]);
      setInputValue('');
    }
  };

  return(
   <form onSubmit={handleSubmit}>
     <Searcher>
       <input
         type="text"
         value={inputValue}
         onChange={handleInputChange}/>
     </Searcher>
   </form>
  );


};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
};
