import { useState, useEffect } from 'react'
import apiBack from '../api/apiBanks'


const useGetBanks = () => {
  
  const [bankList, setBankList] = useState([])

  useEffect(() => {
    
    apiBack.get('').then( elements =>  {
      console.log(elements.data);
    })
  
  }, [])
  
  
    return {

  }
}

export default useGetBanks;