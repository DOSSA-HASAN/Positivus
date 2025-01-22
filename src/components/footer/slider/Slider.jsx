import React, { useState } from 'react'
import "./slider.css"

function Slider() {

    const testimonials = [
        {
            "name": "John Smith 1",
            "role": "Marketing Director at XYZ Corp",
            "testimonial": "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."
        },
        {
            "name": "John Smith 2",
            "role": "Marketing Director at XYZ Corp",
            "testimonial": "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."
        },
        {
            "name": "John Smith 3",
            "role": "Marketing Director at XYZ Corp",
            "testimonial": "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."
        },
        {
            "name": "John Smith 4",
            "role": "Marketing Director at XYZ Corp",
            "testimonial": "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."
        },
        {
            "name": "John Smith 5",
            "role": "Marketing Director at XYZ Corp",
            "testimonial": "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."
        },
        {
            "name": "John Smith 6",
            "role": "Marketing Director at XYZ Corp",
            "testimonial": "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."
        },
        {
            "name": "John Smith 7",
            "role": "Marketing Director at XYZ Corp",
            "testimonial": "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."
        },

    ]

    const [sliderNum, setSliderNum] = useState(0)

    const handleNext = () => {
        setSliderNum((prevIndex) => prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1)
    }

    const handlePrev = () => {
        setSliderNum((prevIndex) => prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1)
    }
    return (
        <>
            <section className="slider-section">
                <article className='title-banner'>
                    <h2>Services</h2>
                    <p>At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</p>
                </article>

                <main className="slider-cont">
                    <figure className="sliders" 
                        style={{transform: `translateX(-${sliderNum * 100}%)`}}
                    >
                        {
                            testimonials.map((testimonial, index) => (

                                <>
                                    <div key={index} className="testimonial">
                                        <p className='test'>{testimonial.testimonial}</p>
                                        <span>
                                            <p className="test-name">{testimonial.name}</p>
                                            <p className="test-role">{testimonial.role}</p>
                                        </span>
                                    </div>
                                </>
                            ))
                        }
                    </figure>
                    <div className="arrow-cont">
                        <span className="left-arrow" onClick={handlePrev}><i className="fa-solid fa-arrow-left"></i></span>
                        <span className="right-arrow" onClick={handleNext}><i class="fa-solid fa-arrow-right"></i></span>
                    </div>

                </main>
            </section>
        </>
    )
}

export default Slider
