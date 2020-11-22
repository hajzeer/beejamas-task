import React, {useState, useContext} from "react"
import { Link } from "gatsby"


import Cart from "./../Cart"

import CartIcon from "./../../assets/elements/cart.svg"
import Arrow from "./../../assets/elements/arrow.svg"

import headerStyles from "./header.module.css"
import { CartContext } from "../../context/CartContext"

export default function Header() {
  const [cart, setCart] = useContext(CartContext)
  const [isVisible, setIsVisible] = useState(false)

  const handleClick = () => {
    if (isVisible === false) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }
  return (
    <header className={headerStyles.header__container}>
      <div onClick={handleClick}
           className={isVisible === true ? (
             headerStyles.background
           ) : (
             null
           )}/>
        <Link to="/" className={headerStyles.link__style}>JAM SHOP</Link>
        <div className={headerStyles.cart__outer}>
          <div>
          <img className={headerStyles.cart__img} src={CartIcon}/>
            <div className={
              isVisible === false ? (
              headerStyles.badge__outer
            ) : (
              `${headerStyles.badge__outer} ${headerStyles.color}`
            )}>
              {cart.length}
            </div>
          </div>
          {cart.length < 1 ? (
            <div className={headerStyles.non__badge}></div>
          ) : (
            <button
              onClick={handleClick}
              className={isVisible === false ? (headerStyles.button__arrow) : (`${headerStyles.button__arrow} ${headerStyles.button__arrowActive}`)}
            >
              <img className={headerStyles.arrow__img} src={Arrow}/>
            </button>

          )}
          <Cart visibility={isVisible}/>
        </div>

    </header>
  )
}
