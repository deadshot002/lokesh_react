import React from 'react'
import lokeshj from './lokesh2.jpg'
import pbf1 from './lcv.pdf';

export const Nav = () => {
  const handleRef = (param) => window.scrollTo(0, param);
  return (
    <>
      <div className="imgmain"><img src={lokeshj} alt="error" /></div>
      <div id="menu">
        <div id="menu-bar">
          <div id="bar1" className="bar"></div>
          <div id="bar2" className="bar"></div>
          <div id="bar3" className="bar"></div>
        </div>
        <nav className="nav" id="nav">
          <ul>
            <li onClick={() => handleRef(900)}><b>01.</b>ABOUT</li>
            <li onClick={() => handleRef(1350)}><b>02.</b>WORK</li>
            <li onClick={() => handleRef(3600)}><b>03.</b>STUDIES</li>
            <li onClick={() => handleRef(5000)}><b>04.</b>CONTACT</li>
            <button className="button"><a href={pbf1}>Resume</a></button>
          </ul>
        </nav>
      </div>
      <div className="menu-bg" id="menu-bg"></div>
    </>
  )
}
