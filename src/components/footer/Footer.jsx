import React from 'react'
import { Link } from 'react-router-dom'
import "./footer.css"

function Footer() {
    return (
        <footer>
            <header className="footer-head">
                <figure className='logo-container'>
                    <div className='footer-star'>
                        <img src="/star-l.png" alt="" />
                    </div>
                    <h2>Positivus</h2>
                </figure>
                <div className="links-cont">
                    <Link><p>About us</p></Link>
                    <Link><p>Services</p></Link>
                    <Link><p>Use Cases</p></Link>
                    <Link><p>Pricing</p></Link>
                    <Link><p>Blog</p></Link>
                </div>
                <figure className="socials-cont">
                    <img src="/footer-social-01.png" alt="" />
                    <img src="/footer-social-02.png" alt="" />
                    <img src="/footer-social-03.png" alt="" />
                </figure>
            </header>
            <article className="footer-contact-info">
                <div className="footer-left">
                    <h3>Contact us:</h3>
                    <p>Email: info@positivus.com</p>
                    <p>Phone: 555-567-8901</p>
                    <p>Address: 1234 Main St Moonstone City, Stardust State 12345</p>
                </div>
                <div className="footer-right">
                    <input type="email" name="" id="" placeholder='Email'/>
                    <button>Subscribe to news</button>
                </div>
            </article>
            <div className="copyrights-cont">
                <p>&copy; Positivus. All Rights Reserved.</p>
                <p>Privacy Policy</p>
            </div>
        </footer>
    )
}

export default Footer
