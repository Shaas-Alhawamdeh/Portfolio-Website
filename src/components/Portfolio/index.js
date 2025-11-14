import ShaasLogo from '../../assets/images/portfolio.png'
import DjLogo from '../../assets/images/djshaas.png'
import BubbleDownLogo from '../../assets/images/bubbledown.png'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import './index.scss'

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  const [items] = useState([
  {
    name: 'React Portfolio',
    description:
      'My own portfolio built with React. Features clean, responsive design to showcase my projects and skills.',
    stack: 'ReactJS, Node.js, GSAP, FontAwesome, SCSS, Vercel',
    url: 'https://shaas.vercel.app/',
    image: ShaasLogo,
  },
  {
    name: 'DJ Booking Website & AI Event Assistant',
    description:
      'Full-stack DJ platform with a custom AI assistant for client replies, scheduling, and payments.',
    stack:
      'ReactJS, FastAPI (Python), TensorFlow, NLP, Stripe API, PostgreSQL, AWS',
    url: 'https://your-djsite-link.com',
    image: DjLogo,
  },
  {
    name: 'BubbleDown',
    description:
      'A web and mobile app that uses Diffie-Hellman key exchange and AI to let users securely share and verify local price data to reduce inflation.',
    stack:
      'ReactJS, React Native, Node.js, FastAPI (Python), OpenAI API, PostgreSQL, Azure',
    url: 'https://shaas.vercel.app/',
    image: BubbleDownLogo,
  },
])


  return (
    <div className="container portfolio-page">
      <h1 className="page-title">
        <AnimatedLetters
          letterClass={letterClass}
          strArray={['P', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o']}
          idx={15}
        />
      </h1>

      <div className="images-container">
        {items.map((item, i) => (
          <div
            key={i}
            className="image-box"
            style={{
              animationDelay: `${1 + i * 1.5}s`,
            }}
          >
            <img src={item.image} alt={item.name} />
            <div className="content">
              <p className="title">{item.name}</p>
              <h4 className="description">{item.description}</h4>
              <p className="stack">{item.stack}</p>
              <button onClick={() => window.open(item.url, '_blank')}>
                View
              </button>
              {item.name !== 'React Portfolio' && (
                <p className="progress">Work in Progress 🚧</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Portfolio

