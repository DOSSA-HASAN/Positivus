import React from 'react'
import "./casestudy.css"

function CaseStudy() {
    return (
        <section className='case-study-section'>
            <article className='title-banner'>
                <h2>Case Studies</h2>
                <p>Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies</p>
            </article>

            <main className="case-study-container">
                <article className="case-study">
                    <p>For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</p>
                    <div className="learn-more-cont">
                        <span>Learn more</span>
                        <img src="/case-study-arrow.png" alt="" />
                    </div>
                </article>
                <article className="case-study">
                    <p>For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</p>
                    <div className="learn-more-cont">
                        <span>Learn more</span>
                        <img src="/case-study-arrow.png" alt="" />
                    </div>
                </article>
                <article className="case-study">
                    <p>For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</p>
                    <div className="learn-more-cont">
                        <span>Learn more</span>
                        <img src="/case-study-arrow.png" alt="" />
                    </div>
                </article>
            </main>
        </section>
    )
}

export default CaseStudy
