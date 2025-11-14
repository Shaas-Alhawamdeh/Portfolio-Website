import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHome,
  faUser,
  faEnvelope,
  faSuitcase,
  faBars,
  faXmark,
  faFileAlt,
} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import './index.scss'
import LogoS from '../../assets/images/logopreload.png'

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false)

  return (
    <div className={`nav-bar ${showNav ? 'open' : ''}`}>
      <Link className="logo" to="/" onClick={() => setShowNav(false)}>
        <img src={LogoS} alt="Shaas Logo" />
      </Link>

      <nav className={showNav ? 'nav-open' : 'nav-closed'}>
        <NavLink exact="true" to="/" onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faHome} color="#fff" />
          <span>Home</span>
        </NavLink>

        <NavLink to="/about" onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faUser} color="#fff" />
          <span>About</span>
        </NavLink>

        <NavLink to="/portfolio" onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faSuitcase} color="#fff" />
          <span>Portfolio</span>
        </NavLink>

        {/* ✅ Updated Resume Link */}
        <a
          href="/Shaas_Resume.pdf"
          className="resume-link"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open my resume PDF in a new tab"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faFileAlt} color="#ffd700" />
          <span>Resume</span>
        </a>

        <NavLink to="/contact" onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faEnvelope} color="#ffd700" />
          <span>Contact</span>
        </NavLink>
      </nav>

      <FontAwesomeIcon
        onClick={() => setShowNav(!showNav)}
        icon={showNav ? faXmark : faBars}
        color="#ffd700"
        size="2x"
        className="hamburger-icon"
      />
    </div>
  )
}

export default Sidebar
