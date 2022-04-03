import { createContext, useContext } from 'react';

import { useProduct } from '../hooks/useProduct'

import style from '../styles/styles.module.css'
import { ProductContextProps, Props } from '../interfaces/interfaces';

// import { ProductButtons, ProductImage, ProductTitle  } from './index'

export const ProductContext = createContext( {  } as ProductContextProps )
export const { Provider } = ProductContext


export const ProductCard = ( { product, children }:Props ) => {
   
   const { count, handleButton } = useProduct( 0 )

   return (
      <Provider value={ { count, handleButton, product } } >
         <div className={ style.productCard }>

            { children }

         </div>
      </Provider>
   )
}


// ProductCard.Title = ProductTitle
// ProductCard.Image = ProductImage
// ProductCard.Buttons = ProductButtons
