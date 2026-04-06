import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from '@studio-freight/lenis'
import BackgroundScene from './components/BackgroundScene'
import { ContentSections, Header, HeroSection } from './components/sections'
import { ResumeModal } from './components/ui'
import { typingLines } from './data'

gsap.registerPlugin(ScrollTrigger)
const MotionDiv = motion.div

function App() {
  const [booted, setBooted] = useState(false)
  const [typingIndex, setTypingIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [resumeOpen, setResumeOpen] = useState(false)
  const cursorRef = useRef(null)
  const cursorDotRef = useRef(null)
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll()
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -80])

  useEffect(() => {
    const bootTimer = window.setTimeout(() => setBooted(true), 3000)
    return () => window.clearTimeout(bootTimer)
  }, [])

  useEffect(() => {
    const currentLine = typingLines[typingIndex]
    if (displayedText.length < currentLine.length) {
      const timeout = window.setTimeout(() => {
        setDisplayedText(currentLine.slice(0, displayedText.length + 1))
      }, 65)
      return () => window.clearTimeout(timeout)
    }

    const pause = window.setTimeout(() => {
      setDisplayedText('')
      setTypingIndex((index) => (index + 1) % typingLines.length)
    }, 1800)
    return () => window.clearTimeout(pause)
  }, [displayedText, typingIndex])

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true, gestureOrientation: 'vertical' })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    const frame = requestAnimationFrame(raf)
    return () => {
      cancelAnimationFrame(frame)
      lenis.destroy()
    }
  }, [])

  useEffect(() => {
    const sections = gsap.utils.toArray('.section-reveal')
    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: { trigger: section, start: 'top 82%' },
        },
      )
    })

    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current.querySelectorAll('.hero-chip, .hero-title, .hero-copy, .hero-actions, .hero-metrics'),
        { y: 32, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.9, ease: 'power3.out', delay: 3.05 },
      )
    }

    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
  }, [])

  useEffect(() => {
    const moveCursor = (event) => {
      if (cursorRef.current) {
        gsap.to(cursorRef.current, { x: event.clientX, y: event.clientY, duration: 0.18, ease: 'power3.out' })
      }
      if (cursorDotRef.current) {
        gsap.to(cursorDotRef.current, { x: event.clientX, y: event.clientY, duration: 0.08, ease: 'power3.out' })
      }
    }

    const handleEnterMagnetic = () => {
      if (!cursorRef.current) return
      gsap.to(cursorRef.current, { scale: 1.8, borderColor: 'rgba(125, 211, 252, 0.95)', duration: 0.25 })
    }

    const handleLeaveMagnetic = () => {
      if (!cursorRef.current) return
      gsap.to(cursorRef.current, { scale: 1, borderColor: 'rgba(255,255,255,0.35)', duration: 0.25 })
    }

    const magnetics = Array.from(document.querySelectorAll('.magnetic'))
    window.addEventListener('mousemove', moveCursor)
    magnetics.forEach((node) => {
      node.addEventListener('mouseenter', handleEnterMagnetic)
      node.addEventListener('mouseleave', handleLeaveMagnetic)
    })

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      magnetics.forEach((node) => {
        node.removeEventListener('mouseenter', handleEnterMagnetic)
        node.removeEventListener('mouseleave', handleLeaveMagnetic)
      })
    }
  }, [])

  const enterSystem = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen bg-[#02040b] text-white">
      <BackgroundScene />
      <div ref={cursorRef} className="pointer-events-none fixed left-0 top-0 z-[70] hidden h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/35 bg-white/5 backdrop-blur-md lg:block" />
      <div ref={cursorDotRef} className="pointer-events-none fixed left-0 top-0 z-[71] hidden h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(103,232,249,0.9)] lg:block" />

      <AnimatePresence>
        {!booted ? (
          <MotionDiv className="fixed inset-0 z-[80] flex flex-col items-center justify-center overflow-hidden bg-[#02040b]" initial={{ opacity: 1 }} exit={{ opacity: 0, transition: { duration: 0.8 } }}>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(76,132,255,0.24),transparent_55%)]" />
            <MotionDiv className="relative space-y-4 text-center" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
              <p className="font-orbitron text-sm uppercase tracking-[0.6em] text-cyan-200/80">Initializing System...</p>
              <p className="font-orbitron text-lg uppercase tracking-[0.35em] text-white/90">Loading Developer Profile...</p>
              <p className="bg-gradient-to-r from-cyan-300 via-blue-300 to-fuchsia-300 bg-clip-text font-orbitron text-4xl uppercase tracking-[0.25em] text-transparent sm:text-6xl">Welcome to MayurOS</p>
            </MotionDiv>
          </MotionDiv>
        ) : null}
      </AnimatePresence>

      <ResumeModal open={resumeOpen} onClose={() => setResumeOpen(false)} />

      <div className="relative z-10">
        <Header />
        <main className="pb-20">
          <HeroSection
            displayedText={displayedText}
            heroRef={heroRef}
            heroY={heroY}
            onEnter={enterSystem}
            onOpenResume={() => setResumeOpen(true)}
          />
          <ContentSections onOpenResume={() => setResumeOpen(true)} />
        </main>
      </div>
    </div>
  )
}

export default App
