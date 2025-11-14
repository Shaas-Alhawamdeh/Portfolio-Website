import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const heyArray = ['H', 'e', 'y']
  const imArray = ['I', '’', 'm', '\u00A0', 'S', 'h', 'a', 'a', 's', ',']
  const jobArray = ['A', '\u00A0', 's', 'o', 'f', 't', 'w', 'a', 'r', 'e', '\u00A0', 'e', 'n', 'g', 'i', 'n', 'e', 'e', 'r', '.']

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1 className="hero-title">
            <AnimatedLetters letterClass={letterClass} strArray={heyArray} idx={1} />
            <br />
            <AnimatedLetters letterClass={letterClass} strArray={imArray} idx={5} />
            <br />
            <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={15} />
          </h1>

          <h2 className="subtitle">Python • JavaScript • SQL • React • AWS • AI & ML</h2>
          <p className="school">Computer Science, 2029 at Montclair State University</p>

          <Link to="/contact" className="flat-button slide-in-btn">
            CONTACT ME
          </Link>
        </div>

        <Logo />
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
