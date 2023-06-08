import React from 'react'
import lokesh from './lokesh.jpg'

export const SectionA2 = () => {
    const text = "        Hi,\n        i'lokesh,\n        Web Developer"
    return (
        <>
            <section className="section-1">
                <pre className="center">
                    {text}
                </pre>
                <img className="imglokesh" src={lokesh} alt="" />
            </section>

            <div className="port"> My Portfolio</div>
        </>
    )
}
