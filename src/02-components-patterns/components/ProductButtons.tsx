import style from '../styles/styles.module.css'
import { useContext } from "react"
import { ProductContext } from './ProductCard'
import { PropsButtons } from '../interfaces/interfaces';


export const ProductButtons = ( props: PropsButtons ) => {

   const { handleButton, count } = useContext( ProductContext )

   return (
      <div style={props.style} className={ ` ${ props.className }  ${ style.buttonsContainer }`  } >

         <button onClick={ () => handleButton( -1 ) } className={ style.buttonMinus }>-</button>

         <div className={ style.countLabel } > { count } </div>

         <button onClick={ () => handleButton( 1 ) } className={ style.buttonAdd } >+</button>

      </div>
   )
}
