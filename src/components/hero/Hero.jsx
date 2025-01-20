import React from 'react'
import "./hero.css"

function Hero() {
    return (
        <section>
            <article className='hero-text'> 
                <h1>Navigating the digital landscape for success</h1>
                <figure className='hero-mobile-image'></figure>
                <p>Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
                <button>Book a consultation</button>
            </article>

            <figure className="hero-image">
            </figure>
        </section>
    )
}

export default Hero
