import React from 'react'

export const SectionD = () => {
    return (
        <>
            <section className="section-4">
                <h1><b>03.</b> STUDIES</h1>
                <div className="mapip">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.1013373103206!2d92.78752929678953!3d24.757714399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374e49dcb63bae9b%3A0x81efa836714a289b!2sNational%20Institute%20Of%20Technology%2C%20Silchar!5e0!3m2!1sen!2sus!4v1684661652867!5m2!1sen!2sus"
                        title='map' loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    <div className="mapbt">
                        <h2>National institute of technology silchar </h2>
                        <p>B.tech / Electrical engineering</p>
                        <p>2022-2026</p>
                        <p>scholar-id 2213025</p>
                        <div className="card">
                            <div className="header">My Skills</div>
                            <div className="body">
                                <div className="skill">
                                    <div className="skill-name">HTML</div>
                                    <div className="skill-level">
                                        <div className="skill-percent skill-1"></div>
                                    </div>
                                    <div className="skill-percent-number">90%</div>
                                </div>
                                <div className="skill">
                                    <div className="skill-name">CSS</div>
                                    <div className="skill-level">
                                        <div className="skill-percent skill-2"></div>
                                    </div>
                                    <div className="skill-percent-number">80%</div>
                                </div>
                                <div className="skill">
                                    <div className="skill-name">JavaScript</div>
                                    <div className="skill-level">
                                        <div className="skill-percent skill-3"></div>
                                    </div>
                                    <div className="skill-percent-number">75%</div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </section>
        </>
    )
}
