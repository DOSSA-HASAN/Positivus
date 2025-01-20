import React from 'react'
// import "./navbar.scss"
import "./navbar.css"
import { Link } from 'react-router'

function Navbar() {
    return (
        <>
            <nav className="navbar">
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
            </nav>
        </>
    )
}

export default Navbar
