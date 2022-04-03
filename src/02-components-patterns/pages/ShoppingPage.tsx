import { ProductCard, ProductTitle, ProductImage, ProductButtons  } from '../components';

import '../styles/custom-styles.css'

const product  = {
   id: "1",
   title: "Coffe Wawa - Card",
   img: "./coffee-mug.png",
}

const ShoppingPage = () => {

   return (
      <div>
         <div>ShoppingPage</div>
         <hr />
         <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
            {/* <ProductCard  product={ product } className="bg-dark text-white" >
               
               <ProductCard.Image  className="custom-image" /> 
               
               <ProductCard.Title className="font-bold" title={ product.title} />

               <ProductCard.Buttons  className="custom-buttons" />

            </ProductCard> */}

            <ProductCard  product={ product }  className="bg-dark text-white" >
               
               <ProductImage className="custom-image" /> 

               <ProductTitle className="font-bold" title={ "Coffe Mug - Card" } />

               <ProductButtons  className="custom-buttons" />

            </ProductCard>

            <ProductCard  product={ product } style={{  backgroundColor: "#70D1F8", color: "white" }} >
            {/* padding:"10px", width:"calc(100% - 20px)", borderRadius:"20px" */}
               <ProductImage style={{ boxShadow: "10px 10px 10px 10px  rgb(0,0,0,0.2)" }} /> 

               <ProductTitle style={{ color: "white", fontWeight: "bold" }} title={ "Coffe Mug - Card" } />

               <ProductButtons style={{ display: "flex", justifyContent: "end" }} />

            </ProductCard>

         </div>
      </div>
   )
}

export default ShoppingPage;