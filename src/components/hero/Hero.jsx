import React from 'react'
import "./Hero.scss"

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero__texts">
                <span className="hero__texts-feature">café delicioso</span>
                <h2 className="hero__texts-title">100% Natural <br /> café fresco</h2>
                <button className="hero__texts-btn">Comprar ahora</button>
            </div>
        </section>
    )
}


export default Hero