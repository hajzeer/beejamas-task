import React, { useEffect } from "react"
import {graphql} from "gatsby"
import global from "../pages/global.module.css"
import Img from "gatsby-image"

import productTemplateStyle from "./productTemplate.module.css";
import { CartContext, CartProvider } from "../context/CartContext"
import Layout from "../layouts"
import SEO from "../components/SEO"

const ProductTemplate = props => {
   const product = props.data.product;
   const {frontmatter} = product;

   return(
       <Layout>
         <SEO title={frontmatter.name} />
        <section className={global}>
          <section className={productTemplateStyle.container}>
            <div className={productTemplateStyle.image__outer}>
              <Img className={productTemplateStyle.product__image} fluid={frontmatter.image.childImageSharp.fluid}/>
            </div>
            <div className={productTemplateStyle.description__outer}>
              <p className={productTemplateStyle.tag__paragraph}>{frontmatter.tag}</p>
              <h2 className={productTemplateStyle.name}>{frontmatter.name}</h2>
              <p className={productTemplateStyle.description}>{frontmatter.description}</p>
              <h3 className={productTemplateStyle.price}>${frontmatter.price}</h3>
            <button className={productTemplateStyle.button__style}>ADD TO CART</button>
            </div>
          </section>
        </section>
       </Layout>
  )
}
export default ProductTemplate

export const pageQuery = graphql`
query($slug: String) {
           product: markdownRemark (fields: {slug: { eq: $slug } }){
    fields {
      slug
    }              
    frontmatter {
      slug
      name
      description
      price
      tag
      image  {
        childImageSharp {
          fluid (maxWidth: 400) {
              ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
}
`