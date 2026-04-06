import { useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Download, ExternalLink, Sparkles, X } from 'lucide-react'
import gsap from 'gsap'
import { githubUrl, resumeUrl } from '../data'
const MotionDiv = motion.div

export function MagneticButton({ children, href, className = '', external = false, onClick }) {
  const ref = useRef(null)

  const handleMove = (event) => {
    const node = ref.current
    if (!node) return
    const rect = node.getBoundingClientRect()
    const offsetX = event.clientX - (rect.left + rect.width / 2)
    const offsetY = event.clientY - (rect.top + rect.height / 2)
    gsap.to(node, {
      x: offsetX * 0.18,
      y: offsetY * 0.18,
      duration: 0.35,
      ease: 'power3.out',
    })
  }

  const handleLeave = () => {
    if (!ref.current) return
    gsap.to(ref.current, { x: 0, y: 0, duration: 0.45, ease: 'elastic.out(1, 0.35)' })
  }

  const sharedProps = {
    ref,
    className: `magnetic group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_40px_rgba(79,172,254,0.16)] backdrop-blur-xl transition-colors duration-300 hover:border-cyan-300/70 hover:bg-white/16 ${className}`,
    onMouseMove: handleMove,
    onMouseLeave: handleLeave,
    onClick,
  }

  const overlay = (
    <>
      <span className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.25),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <span className="relative z-10">{children}</span>
    </>
  )

  if (href) {
    return (
      <a
        {...sharedProps}
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noreferrer' : undefined}
      >
        {overlay}
      </a>
    )
  }

  return (
    <button type="button" {...sharedProps}>
      {overlay}
    </button>
  )
}

export function SectionShell({ id, eyebrow, title, description, children, className = '' }) {
  return (
    <section id={id} className={`panel section-reveal relative mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8 ${className}`}>
      <div className="glass-border rounded-[2rem] border border-white/12 bg-white/6 p-6 shadow-[0_0_80px_rgba(79,172,254,0.08)] backdrop-blur-2xl sm:p-8">
        <div className="mb-8 flex flex-col gap-3 lg:max-w-3xl">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.35em] text-cyan-200">
            <Sparkles size={14} />
            {eyebrow}
          </span>
          <h2 className="font-orbitron text-3xl font-semibold uppercase tracking-[0.08em] text-white sm:text-4xl">
            {title}
          </h2>
          <p className="max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">{description}</p>
        </div>
        {children}
      </div>
    </section>
  )
}

export function ResumeModal({ open, onClose }) {
  return (
    <AnimatePresence>
      {open ? (
        <MotionDiv
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <MotionDiv
            className="w-full max-w-5xl rounded-[2rem] border border-cyan-300/20 bg-slate-950/90 p-4 shadow-[0_0_80px_rgba(79,172,254,0.22)]"
            initial={{ y: 30, opacity: 0, scale: 0.96 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-4 flex items-center justify-between gap-4 border-b border-white/10 pb-4">
              <div>
                <h3 className="font-orbitron text-xl uppercase tracking-[0.14em] text-white">Resume Viewer</h3>
                <p className="text-sm text-slate-400">Embedded preview for Mayur Jadhav Resume</p>
              </div>
              <div className="flex items-center gap-3">
                <MagneticButton href={resumeUrl} external className="px-4 py-2 text-xs">
                  Download
                  <Download size={14} />
                </MagneticButton>
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-full border border-white/15 p-2 text-slate-300 transition hover:border-cyan-300/50 hover:text-white"
                  aria-label="Close resume modal"
                >
                  <X size={18} />
                </button>
              </div>
            </div>
            <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-900/70">
              <iframe title="Mayur Jadhav Resume" src={resumeUrl} className="h-[70vh] w-full" />
            </div>
          </MotionDiv>
        </MotionDiv>
      ) : null}
    </AnimatePresence>
  )
}

export function ProjectButtons() {
  return (
    <div className="mt-8 flex flex-wrap gap-4">
      <MagneticButton href="#" className="px-5 py-2.5 text-xs">
        Live Demo
        <ExternalLink size={14} />
      </MagneticButton>
      <MagneticButton href={githubUrl} external className="bg-white/6 px-5 py-2.5 text-xs">
        GitHub
        <ExternalLink size={14} />
      </MagneticButton>
    </div>
  )
}
