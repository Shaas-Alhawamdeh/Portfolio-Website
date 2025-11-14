import { useEffect, useState, useRef } from 'react'
import Loader from 'react-loaders'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faHandshake } from '@fortawesome/free-solid-svg-icons'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [typedText, setTypedText] = useState('')
  const [showConnect, setShowConnect] = useState(false)

  const fullText =
    "Thank you for your interest in connecting! I value clear communication and welcome inquiries regarding opportunities, projects, or collaborations. Don't hesitate to contact me using the form."
  const form = useRef()

  useEffect(() => {
    const timer = setTimeout(() => setLetterClass('text-animate-hover'), 3000)
    let i = 0

    const typingInterval = setInterval(() => {
      setTypedText(fullText.slice(0, i))
      i++
      if (i > fullText.length) {
        clearInterval(typingInterval)
        setTimeout(() => setShowConnect(true), 400)
      }
    }, 15)

    return () => {
      clearTimeout(timer)
      clearInterval(typingInterval)
    }
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs
      .sendForm('service_0lo9iua', 'template_dghv9gl', form.current, '3L3boLoGdGU8IRZ9Z')
      .then(() => alert('Message sent!'))
      .catch(() => alert('Failed to send message.'))
  }

  return (
    <>
      <div className="container contact-page">
        <div className="left-zone fade-in">
          <h1 className="page-title">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', '\u00a0', 'M', 'e']}
              idx={15}
            />
          </h1>

          <p className="thank-text typewriter">
            {typedText}
            <span className="cursor">|</span>
          </p>

          <div className={`connect-section ${showConnect ? 'fade-in-connect' : ''}`}>
            <h2>Connect With Me</h2>
            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/dj-shaas"
                target="_blank"
                rel="noreferrer"
                className="social-icon linkedin"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="https://montclair.joinhandshake.com/profiles/ftvd7k"
                target="_blank"
                rel="noreferrer"
                className="social-icon handshake"
              >
                <FontAwesomeIcon icon={faHandshake} />
              </a>
              <a
                href="https://github.com/Shaas-Alhawamdeh"
                target="_blank"
                rel="noreferrer"
                className="social-icon github"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="mailto:shaasalhawamdeh@gmail.com"
                className="social-icon email"
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </div>
          </div>
        </div>

        <div className="right-zone">
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="form-row">
              <input placeholder="Full Name" type="text" name="name" required />
              <input placeholder="Your Email" type="email" name="email" required />
            </div>
            <input placeholder="Subject" type="text" name="subject" required />
            <textarea placeholder="Message" name="message" required></textarea>
            <button type="submit" className="flat-button">SEND</button>
          </form>
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Contact
