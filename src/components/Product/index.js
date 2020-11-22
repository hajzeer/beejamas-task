import React, { useEffect } from "react"
import {graphql, useStaticQuery} from "gatsby";

import ProductStyle from "./product.module.css"
import ProductList from "../ProductList"

import ArrowRight from "./../../assets/elements/ArrowRight.svg"
import ArrowLeft from "./../../assets/elements/ArrowLeft.svg"

const Product = () => {
  const {allMarkdownRemark} = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                name
                slug
                description
                price
                image {
                  childImageSharp {
                    fluid (maxWidth: 400) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                title
                lead
              }
            }
          }
        }
      }
    `
  )

  let slideIndex = 1;
  const slides = document.getElementsByClassName("slide")

  const showSlides = (n) => {

    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length
    }
    for(let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"
    }
    if (window.screen.width < 1024) {
      slides[slideIndex - 1].style.display = "block";

    }
    if (window.screen.width > 1024 ) {
      for(let i = 0; i < 4; i++) {
        let j = (slideIndex + i) - 1
        if (j === 6) {
          slideIndex = 1
        }
          slides[j].style.display = "block";
      }
    }
  }

  const handleNext = (e) => {
    showSlides(slideIndex += e);
  }

  const handlePrev = (e) => {
    showSlides(slideIndex += e);
  }

  useEffect(() => {
    showSlides(slideIndex)
  })
  return(
    <section id="product" className={ProductStyle.product__container}>
     <h2 className={ProductStyle.subject}>
       Explore community choices
     </h2>
      <p className={ProductStyle.paragraph}>
        Updated daily based on most popular choices among dev community
      </p>
      <div className={ProductStyle.container__inner}>
      <button onClick={() => handlePrev(-1)}  className={ProductStyle.button__slider}>
        <img src={ArrowLeft}/>
      </button>
        <ProductList items={allMarkdownRemark.edges}/>
      <button onClick={() => handleNext(1)} className={ProductStyle.button__slider}>
        <img src={ArrowRight}/>
      </button>
      </div>
    </section>
  )
}
export default Product;