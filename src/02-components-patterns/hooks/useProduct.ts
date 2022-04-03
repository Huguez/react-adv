import { useState } from "react"

export const useProduct = ( initValue: number = 0 ) => {

   const [ count, setCount ] = useState( initValue )
   
   const handleButton = ( value:number ) => {
      setCount( s => Math.max( s + value, initValue )  )
   }

   const reset = () => {
      setCount( initValue )
   }
   
   return { count, handleButton, reset }
}