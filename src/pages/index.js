import React from "react"
import global from "./global.module.css"

import Layout from "../layouts"
import SEO from "../components/SEO"
import Hero from "../components/Hero"
import Product from "../components/Product"
import {CartProvider} from "../context/CartContext"

export default function IndexPage() {
  return (
    <Layout className={global}>
      <SEO title="Home" />
        <Hero />
        <Product/>
    </Layout>
  )
}
