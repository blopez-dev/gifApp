import {useState, useEffect} from 'react';
import {petition} from '../helpers/getGifs'

 export const useFetchGifs = (category) => {

  const [state, setState] = useState({
    data: [],
    loading: true
  })

  useEffect( () => {
    petition(category)
      .then( imgs => {
        setTimeout( () => {
          setState({
            data: imgs,
            loading: false
          })
        },1500)
      })

  }, [])


  return state;

 }
