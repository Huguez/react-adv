import style from '../styles/styles.module.css'
import { useContext } from "react"
import { ProductContext } from './ProductCard'
import { ProductButtons as ProductPropsButtons } from '../interfaces/interfaces';


export const ProductButtons = ( props:ProductPropsButtons ) => {

   const { handleButton, count } = useContext( ProductContext )

   return (
      <div className={ style.buttonsContainer } >

         <button onClick={ () => handleButton( -1 ) } className={ style.buttonMinus }>-</button>

         <div className={ style.countLabel } > { count } </div>

         <button onClick={ () => handleButton( 1 ) } className={ style.buttonAdd } >+</button>

      </div>
   )
}
