import React, {useContext} from "react";
import { navigate } from "gatsby"
import Img from "gatsby-image"


import ProductListStyle from "./productList.module.css"
import { CartContext, CartProvider } from "../../context/CartContext"



const handleClick = e => {
  navigate(e)
}


const ProductList = ({items}) => (
  items.map(item => {
        const [cart, setCart] = useContext(CartContext);

        const handleAdd = () => {
          const products = {
            image: item.node.frontmatter.image.childImageSharp.fluid,
            name: item.node.frontmatter.name,
            price: item.node.frontmatter.price,
          }
          setCart(currentState => [...currentState, products])
        }

    if ( item.node.frontmatter.title.length <= 0) {
      return <CartProvider key={item.node.frontmatter.slug}>
      <section className={`slide ${ProductListStyle.container}`}>
          <div  onClick={() => handleClick(item.node.fields.slug)} className={ProductListStyle.container__inner}>
            <Img className={ProductListStyle.product__img} fluid={item.node.frontmatter.image.childImageSharp.fluid}
                 alt={item.node.frontmatter.name} />
            <h2 className={ProductListStyle.name}>{item.node.frontmatter.name}</h2>
            <p className={ProductListStyle.description}>{item.node.frontmatter.description}</p>
          </div>
          <button onClick={handleAdd} className={ProductListStyle.addCart__button}>+</button>
        </section>
      </CartProvider>
    } else {
      return null
    }}

    )
  );
export default ProductList;

