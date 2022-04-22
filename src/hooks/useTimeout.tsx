import { useEffect, useRef, useState } from 'react';

interface Prosp {
    time: number;
    func: () => void;
}

const useTimeout = ({ time = 2000, func }: Prosp) => {

    const isMounted = useRef(true);

    useEffect(() => {

        if(isMounted.current){

            setTimeout(() => {
               if( isMounted.current ){
                   func()
               }
            }, time);
        }
    
      return () => {
        isMounted.current = false
      }
      
    }, [])
    
  
    return {

    }
}

export default useTimeout;