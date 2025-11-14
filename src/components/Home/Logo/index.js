import './index.scss'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import LogoS from '../../../assets/images/logo-s.png'

const Logo = () => {
  const logoRef = useRef(null)

  useEffect(() => {
    const el = logoRef.current

    
    gsap.fromTo(
      el,
      { opacity: 0, x: 180, scale: 0.8 },
      {
        opacity: 1,
        x: 0,
        scale: 1.2,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.4,
      }
    )

    
    gsap.to(el, {
      y: '-=30', 
      duration: 0.9, 
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    })
  }, [])


  const handleHover = () => {
    gsap.to(logoRef.current, {
      y: -20,
      scale: 1.35,
      duration: 0.25,
      ease: 'back.out(2)',
    })
  }

  const handleLeave = () => {
    gsap.to(logoRef.current, {
      y: 0,
      scale: 1.2,
      duration: 0.4,
      ease: 'power2.inOut',
    })
  }

  return (
    <div className="logo-container">
      <img
        ref={logoRef}
        className="solid-logo"
        src={LogoS}
        alt="Shaas Logo"
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
      />
    </div>
  )
}

export default Logo
