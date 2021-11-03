import { StaticImage } from "gatsby-plugin-image"
import React from "react"

import "./hero.scss"

const Hero = (props) => {
  return (
    <div className="hero">
      <StaticImage
        src="./img/hero.jpg"
        placeholder="blurred"
        alt="Droga w środku nocy"
      />
      <div className="hero__container">
        <h1 className="hero__text hero__text--header">{props.firstLine}</h1>
        <h2 className="hero__text ">{props.secondLine}</h2>
      </div>
    </div>
  )
}

export default Hero