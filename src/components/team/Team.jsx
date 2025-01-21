import React from 'react'
import "./team.css"

function Team() {

    const team = [
        {
            "name": "John Doe",
            "role": "CEO and Founder",
            "description": "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
            "image": "/team-pic.png"
        },
        {
            "name": "John Doe",
            "role": "CEO and Founder",
            "description": "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
            "image": "/team-pic.png"
        },
        {
            "name": "John Doe",
            "role": "CEO and Founder",
            "description": "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
            "image": "/team-pic.png"
        },
        {
            "name": "John Doe",
            "role": "CEO and Founder",
            "description": "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
            "image": "/team-pic.png"
        },
        {
            "name": "John Doe",
            "role": "CEO and Founder",
            "description": "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
            "image": "/team-pic.png"
        },
        {
            "name": "John Doe",
            "role": "CEO and Founder",
            "description": "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
            "image": "/team-pic.png"
        },
    ]

    const darkTheme = window.matchMedia('(prefers-color-scheme: dark)')

    return (
        <section className='team-section'>
            <article className='title-banner'>
                <h2>Team</h2>
                <p>Meet the skilled and experienced team behind our successful digital marketing strategies</p>
            </article>

            <main className='team-cont'>
                {
                    team.map(person => (
                        <div className="person">
                            <div className="top">
                                <span className='person-info'>
                                    <figure>
                                        <img src={person.image} alt="" />
                                    </figure>
                                    <span>
                                        <p className="name">{person.name}</p>
                                        <p className="role">{person.role}</p>
                                    </span>
                                </span>
                                <div className="linkedIn-logo">
                                    <img src={darkTheme ? "/linkedIn-d.png" : "/linkedIn.png"} alt="" />
                                </div>
                            </div>
                            <div className="bottom">
                                <p>{person.description}</p>
                            </div>
                        </div>
                    ))
                }
            </main>
        </section>
    )
}

export default Team
