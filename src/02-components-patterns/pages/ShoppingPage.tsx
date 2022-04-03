import { ProductCard  } from '../components/';

const product  = {
   id: "1",
   title: "titulo",
   img: "./coffee-mug.png",
}

const ShoppingPage = () => {

   return (
      <div>
         <div>ShoppingPage</div>
         <hr />
         <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
            <ProductCard  product={ product } >
               
               <ProductCard.Title  title={ product.title} />

               <ProductCard.Image /> 

               <ProductCard.Buttons />

            </ProductCard>

            <ProductCard  product={ product } >
               
               <ProductCard.Title  title={ "cale" } />

               <ProductCard.Image /> 

               <ProductCard.Buttons />

            </ProductCard>
         </div>
      </div>
   )
}

export default ShoppingPage;