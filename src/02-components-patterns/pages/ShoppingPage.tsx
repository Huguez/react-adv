import { ProductCard, ProductTitle, ProductImage, ProductButtons  } from '../components';
import productos from '../data/data';

import '../styles/custom-styles.css'
import { useShoppingCart } from '../hooks/useShoppingCart';


const ShoppingPage = () => {
   
   const { shoppingCart, onChangeProduct } = useShoppingCart()

   return (
      <div>
         <div>ShoppingPage</div>
         <hr />
         <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>   
            {
               productos.map( ( p, index ) => (
                  <ProductCard value={ shoppingCart[p.id]?.count || 0 } onChange={ (e) => onChangeProduct( e )  } key={ index } product={ p }  className="bg-dark text-white" >
                  
                     <ProductImage className="custom-image" /> 

                     <ProductTitle className="font-bold" title={ p.title } />

                     <ProductButtons  className="custom-buttons" />

                  </ProductCard>
               ) )
            }
         </div>

         <div className='shopping-cart'>

            {
               Object.entries( shoppingCart ).map( ([key, p ])=> (
                  <ProductCard onChange={ onChangeProduct } value={ p.count } key={ key } style={{ width: "100px" } } product={ p }  className="bg-dark text-white" >
                  
                     <ProductImage className="custom-image" /> 
   
                     <ProductButtons  className="custom-buttons" />
   
                  </ProductCard>
               ) ) 
            }
         </div>

      </div>
   )
}

export default ShoppingPage;