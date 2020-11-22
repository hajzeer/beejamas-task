import React from "react"
import HeroImageStyles from "./hero.module.css"

import HeroBackground from "../../assets/elements/hero_background.svg"
import HeroImage from "../../assets/elements/monitor.svg"
import HeroDecor from "../../assets/elements/hero_decor.svg"

const handleClick = (e) => {
  const products = document.getElementById('product')
  e.preventDefault()
  products.scrollIntoView(true)
}

function HomepageHero() {
  return (
    <section className={HeroImageStyles.container}>
      <img className={HeroImageStyles.hero__background} src={HeroBackground} />
      <div className={HeroImageStyles.hero__inner}>
        <img className={HeroImageStyles.hero__image} src={HeroImage} alt="Vector Monitor" />
        <div className={HeroImageStyles.description__outer}>
        <img className={HeroImageStyles.hero__decor} src={HeroDecor}/>
        <h1 className={HeroImageStyles.subject}>
          Don't waste time
          <br />
          on boring things
        </h1>
        <button onClick={handleClick} className={HeroImageStyles.button__style}>GO EXPLORE</button>
        </div>
      </div>
    </section>
  )
}

export default HomepageHero
