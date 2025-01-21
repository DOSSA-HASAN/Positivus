import React, { useState } from 'react'
import "./workingprocess.css"

function WorkingProcess() {

    const processes = [
        {
            "title": "Consultation",
            "text": "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
        },
        {
            "title": "Research and Strategy Development",
            "text": "We conduct in-depth research on your industry, competitors, and target audience to develop a comprehensive strategy. This includes identifying key opportunities and defining a roadmap to achieve your business goals."
        },
        {
            "title": "Implementation",
            "text": "Our team executes the planned strategies, including content creation, marketing campaigns, and technical setup, ensuring everything aligns with your business objectives and resonates with your target audience."
        },
        {
            "title": "Monitoring and Optimization",
            "text": "We continuously monitor the performance of your campaigns and projects. Using analytics and data insights, we make adjustments to optimize results and ensure the strategy remains effective."
        },
        {
            "title": "Reporting and Communication",
            "text": "Regular reports are provided to keep you informed about progress and performance. We maintain open communication, addressing any questions or concerns and aligning on next steps."
        },
        {
            "title": "Continual Improvement",
            "text": "We refine and enhance strategies based on feedback, results, and changing market trends. Our goal is to drive sustained success and help your business evolve and grow."
        }
    ]

    const [textIndex, setTextIndex] = useState(1)

    const handleText = (num) => {
        if(textIndex == num){
            setTextIndex(null)
        } else {
            setTextIndex(num)
        }
    }

    return (
        <section className='process-section'>
            <article className='title-banner'>
                <h2>Our Working Process </h2>
                <p>Step-by-Step Guide to Achieving Your Business Goals</p>
            </article>

            <main>
                {processes.map((process, index) => (
                    <div key={index} className={textIndex === index ? 'process-cont bg-green': 'process-cont'}>
                        <article className='top'>
                            <div className='process-title-cont'>
                                <p>{index > 10 ? index : '0' + (index+1)}</p>
                                <h2>{process.title}</h2>
                            </div>
                            <div className="show-text-button">
                                <button onClick={() => handleText(index)}>{textIndex == index ? '-' : '+'}</button>
                            </div>
                        </article>
                        <span className={textIndex == index ? 'bottom show-text' : 'bottom'}>
                            <p>{textIndex == index && process.text}</p>
                        </span>
                    </div>
                ))}
            </main>
        </section>
    )
}

export default WorkingProcess
