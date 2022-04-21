import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import apiBack from '../api/apiBanks'

const useGetBanks = () => {
  


  useEffect(() => {
    
    apiBack.get('').then( elements =>  {
      console.log(elements.data);
    })
  
  }, [])
  
  
    return {

  }
}

export default useGetBanks;