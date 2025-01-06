import './nav.css'

const Nav = () => {
  return (
    <nav id="navbar-example2" className="navbar px-3 mb-3 nav">
      <ul className="nav nav-pills flex-column">
        <li className="nav-item nav__item">
          <a className="nav-link nav__about" href="#about-me">
            About Me
          </a>
        </li>
        <li className="nav-item nav__item">
          <a className="nav-link nav__skills" href="#skills">
            Skills
          </a>
        </li>
        <li className="nav-item nav__item">
          <a className="nav-link nav__portfolio" href="#portfolio">
            Portfolio
          </a>
        </li>
        <li className="nav-item nav__item">
          <a className="nav-link nav__contact" href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
