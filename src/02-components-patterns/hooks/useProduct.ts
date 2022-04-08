import { useEffect, useRef, useState } from "react"
import { useProductArgs } from '../interfaces/interfaces';


export const useProduct = ( { onChange, product, value = 0 }: useProductArgs ) => {

   const [ count, setCount ] = useState( value )
   
   const isControlled = useRef( !!onChange )
   

   const handleButton = ( value:number ) => {

      if( isControlled.current ){
         return onChange!( { count: value, product } )         
      }

      const newValue:number = Math.max( count + value, 0 )
      setCount( newValue )

      onChange && onChange( { count: newValue, product } )
   }

   const reset = () => {
      setCount( 0 )
   }

   useEffect( () => {
      setCount( value)
   }, [ value ] )
   
   return { count, handleButton, reset }
}