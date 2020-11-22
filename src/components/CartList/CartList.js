import React from "react"
import Img from "gatsby-image"


import CartListStyle from "./CartList.module.css"
import { CartProvider } from "../../context/CartContext"

const CartList = ({ items }) => (
  items.map(({ name, price, image}) => {
    return (
      <CartProvider>
        <section className={CartListStyle.CartList__container}>
          <Img className={CartListStyle.list__image} fluid={image}/>
          <p className={CartListStyle.paragraph}>{name}</p>
          <p className={CartListStyle.paragraph}>${price}</p>
        </section>
      </CartProvider>
    )
  })
)
export default CartList;