import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import {
  faReact, faJsSquare, faPython, faJava, faGithub, faAws, faDocker, faNodeJs,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loader from 'react-loaders'
import './index.scss'

const About = () => {
  const [typedText, setTypedText] = useState('')
  const [textFinished, setTextFinished] = useState(false)
  const [barsVisible, setBarsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState('languages')
  const [isSwitching, setIsSwitching] = useState(false)
  const [cubeIcons, setCubeIcons] = useState([])

  const aboutText = `I’m a Computer Science student and aspiring Software Engineer passionate about building scalable, modern applications using React, Python, and AWS. My focus is on full-stack development, cloud computing, and AI-driven tools. I’m eager to bring technical skill, creativity, and problem-solving to a Software Engineering internship.`

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      if (i < aboutText.length) {
        setTypedText(prev => prev + aboutText.charAt(i))
        i++
      } else {
        clearInterval(interval)
        setTextFinished(true)
        setTimeout(() => setBarsVisible(true), 400)
      }
    }, 10)
    return () => clearInterval(interval)
  }, [aboutText])

  const handleSectionChange = (section) => {
    if (section === activeSection || isSwitching) return
    setIsSwitching(true)

    let faces = []
    if (section === 'languages') faces = [faPython, faJava, faJsSquare, faReact, faAws, faNodeJs]
    if (section === 'frameworks') faces = [faReact, faNodeJs, faAws, faDocker, faPython, faJsSquare]
    if (section === 'tools') faces = [faGithub, faDocker, faAws, faNodeJs, faReact, faJsSquare]

    setCubeIcons(faces)
    setTimeout(() => { setActiveSection(section); setIsSwitching(false) }, 300)
  }

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1 className="page-title">
            <AnimatedLetters
              letterClass="text-animate-hover"
              strArray={['A', 'b', 'o', 'u', 't', '\u00A0 ', 'M', 'e']}
              idx={15}
            />
          </h1>

          <div className="npc-box">
            <p className="npc-text">{typedText}</p>
          </div>

          {textFinished && (
            <div className="about-buttons fade-in-buttons">
              <button
                className={`about-btn ${activeSection === 'languages' ? 'active' : ''}`}
                onClick={() => handleSectionChange('languages')}
              >Languages</button>
              <button
                className={`about-btn ${activeSection === 'frameworks' ? 'active' : ''}`}
                onClick={() => handleSectionChange('frameworks')}
              >Frameworks / Technologies</button>
              <button
                className={`about-btn ${activeSection === 'tools' ? 'active' : ''}`}
                onClick={() => handleSectionChange('tools')}
              >Development Tools</button>
            </div>
          )}

          {barsVisible && (
            <div className={`skills-wrap ${isSwitching ? 'fade-out' : 'fade-in'}`}>
              {activeSection === 'languages' && (
                <section className="skills-section show fade-bars">
                  <h2 className="skills-title">Languages</h2>
                  {['Python', 'Java', 'JavaScript' , 'SQL'].map((name, i) => (
                    <div className="skill-bar" key={name} style={{ animationDelay: `${0.15 + i * 0.15}s` }}>
                      <span>{name}</span>
                      <div className="bar"><div className={`fill ${name.toLowerCase()}`} /></div>
                    </div>
                  ))}
                </section>
              )}

              {activeSection === 'frameworks' && (
                <section className="skills-section show fade-bars">
                  <h2 className="skills-title">Frameworks & Tech</h2>
                  {[
                    { name: 'React.js', className: 'react' },
                    { name: 'Node.js', className: 'node' },
                    { name: 'FastAPI', className: 'express' },
                    { name: 'TensorFlow', className: 'tensorflow' },
                    { name: 'Natural Language Processing (NLP)', className: 'nlp' },
                  ].map((fw, i) => (
                    <div className="skill-bar" key={fw.name} style={{ animationDelay: `${0.15 + i * 0.15}s` }}>
                      <span>{fw.name}</span>
                      <div className="bar"><div className={`fill ${fw.className}`} /></div>
                    </div>
                  ))}
                </section>
              )}

              {activeSection === 'tools' && (
                <section className="skills-section show fade-bars">
                  <h2 className="skills-title">Development Tools</h2>
                  {[
                    { name: 'Amazon Web Services (AWS)', className: 'aws' },
                    { name: 'Microsoft Azure', className: 'azure' },
                    { name: 'Docker', className: 'docker' },
                    { name: 'Git / GitHub', className: 'git' },
                    { name: 'Postman', className: 'postman' },
                  ].map((tool, i) => (
                    <div className="skill-bar" key={tool.name} style={{ animationDelay: `${0.15 + i * 0.15}s` }}>
                      <span>{tool.name}</span>
                      <div className="bar"><div className={`fill ${tool.className}`} /></div>
                    </div>
                  ))}
                </section>
              )}
            </div>
          )}
        </div>

        
        <div className="cube-container">
          <div className="cubespinner">
            {(cubeIcons.length ? cubeIcons : [faReact, faJsSquare, faAws, faGithub, faNodeJs, faDocker]).map((icon, i) => (
              <div key={i} className={`face${i + 1}`}>
                <FontAwesomeIcon icon={icon} color="#ffffff" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default About
