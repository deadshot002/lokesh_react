import React from 'react'
import pg1 from './pj1.png'
import pg2 from './pj2.png'
import pg3 from './pj3.png'

export const SectionC = () => {
    return (
        <>
            <section className="section-3">
                <h1><b>02.</b> WORK</h1>
                <div className="pjimg">
                    <h2>1 traveling blog website</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi iure nihil atque ab eum reiciendis
                        dignissimos culpa mollitia nisi, asperiores ea, voluptatibus pariatur explicabo perferendis
                        exercitationem velit quaerat sed cupiditate.
                    </p>
                    <div className="borderpj" id="borderpj1"><img className="pj1" src={pg1} alt="error" /></div>
                </div>
                <div className="pjimg">
                    <h2>2 website on yacht trip</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi iure nihil atque ab eum reiciendis
                        dignissimos culpa mollitia nisi, asperiores ea, voluptatibus pariatur explicabo perferendis
                        exercitationem velit quaerat sed cupiditate.
                    </p>
                    <div className="borderpj" id="borderpj2"><img className="pj2" src={pg2} alt="error" /></div>
                </div>
                <div className="pjimg">
                    <h2>3 web of a restaurant</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi iure nihil atque ab eum reiciendis
                        dignissimos culpa mollitia nisi, asperiores ea, voluptatibus pariatur explicabo perferendis
                        exercitationem velit quaerat sed cupiditate.
                    </p>
                    <div className="borderpj" id="borderpj3"><img className="pj3" src={pg3} alt="error" /></div>
                </div>
            </section>
        </>
    )
}
