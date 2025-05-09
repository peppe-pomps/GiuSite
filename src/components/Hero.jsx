import { motion } from "framer-motion"
import { Link } from "react-router-dom"

import "../styles.css"
import BonfireCanvas from "./canvas/Cake"
import { logo, menu, close } from "../assets"
import CakeCanvas from "./canvas/Cake"

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="responsive-paddingX hero-title-container">
        <div className="line-diamond-container">
          <motion.div 
            animate={{rotate: 360}}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
            className="diamond"
          />
          <div className="line orange-gradient"/>
        </div>

        <div className="hero-text-container">
          <h1 className="hero-head-text"> Vieni al mio <span className="coloured-text" title="Compleanno 🎂"> compleanno! </span> </h1>
          <p className="hero-sub-text">
            Registrati per partecipare alla mia festa di compleanno!🥳
          </p>
        </div>
      </div>

      <CakeCanvas/>

      <div className="scroll-down-arrow-container">
        <a href="#registration">
          <motion.div 
            animate={{
              y: [0, 20, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="scroll-down-arrow"
            title="Scorri giù"
          />
        </a>
      </div>
    </section>
  )
}

export default Hero