import React, { useState } from 'react'
// import "./navbar.scss"
import "./navbar.css"
import { Link } from 'react-router-dom'

function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <>
            <nav className="navbar">
                <div className="laptop-menu m-auto">
                    <figure className='logo-container'>
                        <div className="image"></div>
                        <h2>Positivus</h2>
                    </figure>
                    <div className="links-container">
                        <Link><p>About us</p></Link>
                        <Link><p>Services</p></Link>
                        <Link><p>Use Cases</p></Link>
                        <Link><p>Pricing</p></Link>
                        <Link><p>Blog</p></Link>
                        <Link><button>Request a quote</button></Link>
                    </div>
                </div>
                <div className="mobile-menu">
                    <figure className='logo-container'>
                        <div className="image"></div>
                        <h2>Positivus</h2>
                    </figure>
                    <div onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <i className="fa-solid fa-bars"></i>
                    </div>
                    <article className={isMenuOpen ? "links-container" : "mobile-menu-hide"}>
                        <div className="close-menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            <i className="fa-solid fa-xmark"></i> 
                        </div>
                        <Link><p>About us</p></Link>
                        <Link><p>Services</p></Link>
                        <Link><p>Use Cases</p></Link>
                        <Link><p>Pricing</p></Link>
                        <Link><p>Blog</p></Link>
                    </article>
                </div>
            </nav>
        </>
    )
}

export default Navbar
