import React from "react"


import Header from "../components/Header"
import {CartProvider} from "../context/CartContext"

export default function Layout({ children }) {

  return (
    <CartProvider>
    <>
      <Header/>
      <main>{children}</main>
      <footer />
    </>
    </CartProvider>
  )
}
