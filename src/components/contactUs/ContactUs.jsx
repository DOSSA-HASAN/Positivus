import React from 'react'
import "./contactus.css"

function ContactUs() {

    return (
        <section className='contact-us-section'>
            <article className='title-banner'>
                <h2>Contact Us</h2>
                <p>Connect with Us: Let's Discuss Your Digital Marketing Needs</p>
            </article>

            <main className="contact-us-form">
                <form>
                    <div className="radio-button-cont">
                        <span className="radio-button">
                            <input type="radio" name="quote" id="hi" />
                            <label htmlFor="hi">Say hi</label>
                        </span>
                        <span className="radio-button">
                            <input type="radio" name="quote" id="quote" />
                            <label htmlFor="quote">Get a quote</label>
                        </span>
                    </div>
                    <span>
                        <label htmlFor="name">Name</label>
                        <input type="text" placeholder='Name' />
                    </span>

                    <span>
                        <label htmlFor="email">Email *</label>
                        <input type="email" placeholder='Email' />
                    </span>

                    <span>
                        <label htmlFor="message">Message *</label>
                        <input type="text" placeholder='message' />
                    </span>
                    <button>Send Message</button>
                </form>
                <figure className='contact-us-image-cont'>
                </figure>
            </main>
        </section>
    )
}

export default ContactUs
