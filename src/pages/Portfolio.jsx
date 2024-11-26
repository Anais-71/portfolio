import Nav from '../components/nav/Nav'
import './portfolio.css'

//Sections
import About from './sections/about/About'

const Portfolio = () => {
  return (
    <div className="main">
      <div className="sidebar">
        <Nav />
      </div>

      {/* Section 1 - About me */}
      <div className="about-me">
        <About />
      </div>
    </div>
  )
}

export default Portfolio
