import React, { useContext } from "react"

import CartStyle from "./Cart.module.css"
import CartList from "../CartList/CartList"
import { CartContext } from "../../context/CartContext"

const Cart = ({ visibility }) => {

  const [cart, setCart] = useContext(CartContext)

  return (
    <section
             className={visibility === false ? (CartStyle.container__Cart
             ) : (
               `${CartStyle.container__Cart} ${CartStyle.containerActive}`)}
    >
      <div >
        <CartList items={cart}/>
      </div>
      <div className={CartStyle.button__outer}>
      <button className={CartStyle.button}>Submit</button>
      </div>
    </section>
  )
}
export default Cart