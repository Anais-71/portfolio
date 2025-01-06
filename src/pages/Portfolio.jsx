import React, { useEffect } from 'react'
import Nav from '../components/nav/Nav'
import './portfolio.css'
import { ScrollSpy } from 'bootstrap'

// Sections
import Contact from './sections/contact/Contact'
import About from './sections/about/About'
import Skills from './sections/skills/Skills'
import Projects from './sections/portfolio/Projects'

const Portfolio = () => {
  useEffect(() => {
    const scrollSpyEl = document.querySelector('[data-bs-spy="scroll"]')
    if (scrollSpyEl) {
      new ScrollSpy(scrollSpyEl, {
        target: '#navbar-example2',
        smoothScroll: true,
      })
    }
  }, [])

  return (
    <div className="main">
      <div className="sidebar">
        <Nav />
      </div>
      <div
        data-bs-spy="scroll"
        data-bs-target="#navbar-example2"
        data-bs-smooth-scroll="true"
        className="sections scrollspy-example"
        tabIndex="0"
      >
        {/* Section 1 - About Me */}
        <section id="about-me" className="about-me">
          <h2>About Me</h2>
          <About />
        </section>

        {/* Section 2 - Skills */}
        <section id="skills" className="comp">
          <h2>Skills</h2>
          <Skills />
        </section>

        {/* Section 3 - Projects */}
        <section id="portfolio" className="portfolio">
          <h2>Portfolio</h2>
          <Projects />
        </section>

        {/* Section 4 - Contact */}
        <section id="contact" className="contact">
          <h2>Contact</h2>
          <Contact />
        </section>
      </div>
    </div>
  )
}

export default Portfolio
