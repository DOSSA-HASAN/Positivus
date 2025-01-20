import React from 'react'
import "./services.css"

function Services() {

    console.log(window.matchMedia('(prefers-color-scheme: dark)').matches)

    const services = [
        {
            "text": "Search engine",
            "text2": "optimization",
            "image": "/service-1.png"
        },
        {
            "text": "Pay-per-click",
            "text2": "advertising",
            "image": "/service-2.png"
        },
        {
            "text": "Social Media",
            "text2": "Marketing",
            "image": "/service-3.png"
        },
        {
            "text": "Email",
            "text2": "Marketing",
            "image": "/service-4.png"
        },
        {
            "text": "Content",
            "text2": "Creation",
            "image": "/service-5.png"
        },
        {
            "text": "Analytics and ",
            "text2": "Tracking",
            "image": "/service-6.png"
        }
    ]

    return (
        <section className='services-section'>
            <article className='title-banner'>
                <h2>Services</h2>
                <p>At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</p>
            </article>

            <article className='services-container'>
                {services.map(service => (
                    <div className="service">
                        <div className='left'>
                            <div className="service-text">
                                <span>{service.text}</span>
                                <span>{service.text2}</span>
                            </div>
                            <div className='learn-more'>
                                <img src="/service-arrow.png" alt="" />
                                <p>Learn more</p>
                            </div>
                        </div>
                        <img className='right-image' src={service.image} alt="" />
                    </div>
                ))}
            </article>

            <article className='proposal-container'>
                    <main>
                        <h2>Let’s make things happen</h2>
                        <p>Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>
                        <button>Get your free proposal</button>
                    </main>

                    <figure className='proposal-image'></figure>
            </article>

        </section>
    )
}

export default Services
