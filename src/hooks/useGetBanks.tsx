import { useState, useEffect, useRef } from 'react';
import apiBack from '../api/apiBanks'
import { BankListInt } from '../interfaces/BankListInterface';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { addDocument, getDocument } from '../firebase/firestore';



const useGetBanks = () => {
  
  const [bankList, setBankList] = useState<BankListInt[]>([])
  const isMounted = useRef(true);

  useEffect(() => {

    if( isMounted.current  ){
      

        apiBack.get<BankListInt[]>('').then( elements =>  {
          if( isMounted.current ){
            setBankList(elements.data);
            AsyncStorage.setItem( 'banks', JSON.stringify(elements.data) )
          }
        })
      
      
    }
    return () => {
      isMounted.current = false;
    }
  
  }, [])

  // const getBanksData = async () => {

  //   const banks = await AsyncStorage.getItem('banks')
    
  //   if( banks ){
  //     getDocument()
  //   }else{

  //   }

  // }


  
  
    return {
      bankList
  }
}

export default useGetBanks;