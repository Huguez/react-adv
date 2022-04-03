import style from '../styles/styles.module.css'
import noimg from '../assets/no-image.jpg'

import { useContext } from "react"
import { ProductContext } from './ProductCard'

export const ProductImage = ({ img = "" }:{img?:string} ) => {
   const { product } = useContext( ProductContext )

   return (
      <img className={ style.productImg } src={ (img ? img : ( product.img ? product.img : noimg)) }  alt="Product image " />
   )
}

