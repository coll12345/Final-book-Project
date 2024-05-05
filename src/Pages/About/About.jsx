import React from 'react'
import "./about.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About Zendy</h2>
            <p className='fs-17'>Welcome to Zendy, your digital destination for accessing a vast library of books online. At Zendy, we believe that knowledge should be accessible to all, regardless of geographical location, socioeconomic status, or educational background. That's why we've created a platform that empowers individuals to explore, learn, and grow through the power of literature and information.</p>
            <br></br>
            <br></br>
            <br></br>
            <h2 className='about-title fs-26 ls-1'>Our Mission</h2>
            <p className='fs-17'>Our mission at Zendy is simple yet ambitious: to democratize access to knowledge. We strive to break down barriers to learning by providing a comprehensive online library that is accessible anytime, anywhere. By harnessing the power of technology, we aim to bridge the gap between those who seek knowledge and the resources they need to acquire it.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
