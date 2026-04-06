import { motion } from 'framer-motion'
import {
  ArrowRight,
  BrainCircuit,
  Code2,
  Cpu,
  Download,
  ExternalLink,
  Radar,
  UserRound,
} from 'lucide-react'
import {
  achievements,
  contactLinks,
  learningItems,
  navItems,
  projects,
  resumeUrl,
  skillGroups,
  statsCards,
  strengths,
  timeline,
} from '../data'
import { MagneticButton, ProjectButtons, SectionShell } from './ui'
const MotionSection = motion.section
const MotionDiv = motion.div
const MotionArticle = motion.article

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/45 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/30 bg-cyan-400/10 text-cyan-200 shadow-[0_0_30px_rgba(103,232,249,0.24)]">
            <BrainCircuit size={20} />
          </div>
          <div>
            <p className="font-orbitron text-sm uppercase tracking-[0.32em] text-white">MayurOS</p>
            <p className="text-xs uppercase tracking-[0.28em] text-emerald-300">System Status: Online</p>
          </div>
        </div>
        <nav className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-300 shadow-[0_0_50px_rgba(79,172,254,0.08)] md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="rounded-full px-4 py-2 transition hover:bg-white/10 hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

export function HeroSection({ displayedText, heroRef, heroY, onEnter, onOpenResume }) {
  return (
    <MotionSection
      ref={heroRef}
      style={{ y: heroY }}
      className="relative mx-auto flex min-h-[calc(100vh-88px)] w-full max-w-7xl flex-col justify-center px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="grid items-center gap-12 lg:grid-cols-[1.12fr_0.88fr]">
        <div className="space-y-8">
          <div className="hero-chip inline-flex w-fit items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-cyan-200">
            <Radar size={14} />
            AI-Powered Developer Interface
          </div>
          <div className="hero-title space-y-4">
            <p className="font-orbitron text-sm uppercase tracking-[0.45em] text-slate-300">Computer Engineering Graduate</p>
            <h1 className="font-orbitron text-5xl font-semibold uppercase leading-[0.95] tracking-[0.08em] text-white sm:text-6xl xl:text-7xl">
              Mayur Jadhav
            </h1>
            <p className="max-w-2xl text-lg text-slate-300 sm:text-xl">Consistent. Hardworking. Future Software Engineer.</p>
          </div>
          <div className="hero-copy space-y-4">
            <div className="inline-flex min-h-[60px] items-center rounded-2xl border border-white/10 bg-slate-900/45 px-5 py-4 text-base text-cyan-100 shadow-[0_0_40px_rgba(79,172,254,0.08)] backdrop-blur-xl">
              <span className="mr-3 h-2.5 w-2.5 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(110,231,183,0.95)]" />
              <span className="font-medium">{displayedText}</span>
              <span className="ml-1 h-5 w-px animate-pulse bg-cyan-200" />
            </div>
            <p className="max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
              An immersive portfolio built like a futuristic operating system, showcasing engineering focus,
              relentless consistency, and a passion for solving real-world problems through software.
            </p>
          </div>
          <div className="hero-actions flex flex-wrap gap-4">
            <MagneticButton onClick={onEnter}>
              Enter System
              <ArrowRight size={16} />
            </MagneticButton>
              <MagneticButton onClick={onOpenResume} className="bg-white/6">
              View Resume
              <ExternalLink size={16} />
            </MagneticButton>
          </div>
          <div className="hero-metrics grid gap-4 sm:grid-cols-3">
            {[
              { label: 'CGPA', value: '9.8' },
              { label: 'Focus', value: 'Backend + DSA' },
              { label: 'Mode', value: 'Learning Fast' },
            ].map((metric) => (
              <div key={metric.label} className="rounded-3xl border border-white/10 bg-white/6 p-4 backdrop-blur-xl">
                <p className="text-xs uppercase tracking-[0.28em] text-slate-400">{metric.label}</p>
                <p className="mt-2 font-orbitron text-xl text-white">{metric.value}</p>
              </div>
            ))}
          </div>
        </div>

        <MotionDiv className="relative" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 3.1, duration: 0.9 }}>
          <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.24),transparent_56%)] blur-2xl" />
          <div className="glass-border relative overflow-hidden rounded-[2rem] border border-cyan-300/18 bg-slate-950/55 p-6 shadow-[0_0_70px_rgba(79,172,254,0.14)] backdrop-blur-2xl">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="font-orbitron text-sm uppercase tracking-[0.35em] text-white">Developer Kernel</p>
                <p className="mt-2 text-sm text-slate-400">Neural profile scan and live performance map</p>
              </div>
              <div className="rounded-full border border-emerald-300/20 bg-emerald-400/10 px-3 py-1 text-xs uppercase tracking-[0.28em] text-emerald-300">
                Stable
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.6rem] border border-white/10 bg-white/6 p-5">
                <div className="mb-4 flex items-center gap-3">
                  <UserRound className="text-cyan-200" size={20} />
                  <p className="text-sm uppercase tracking-[0.28em] text-slate-300">Profile Signal</p>
                </div>
                <div className="space-y-3 text-sm text-slate-300">
                  <p>Consistency Index: 98%</p>
                  <p>Problem Solving Signal: High</p>
                  <p>Builder Mode: Active</p>
                </div>
              </div>
              <div className="rounded-[1.6rem] border border-white/10 bg-white/6 p-5">
                <div className="mb-4 flex items-center gap-3">
                  <Cpu className="text-fuchsia-200" size={20} />
                  <p className="text-sm uppercase tracking-[0.28em] text-slate-300">System Core</p>
                </div>
                <div className="space-y-3 text-sm text-slate-300">
                  <p>Backend systems</p>
                  <p>Logical architecture</p>
                  <p>Modern web engineering</p>
                </div>
              </div>
              <div className="sm:col-span-2 rounded-[1.6rem] border border-cyan-300/18 bg-gradient-to-r from-cyan-400/10 via-blue-500/10 to-fuchsia-500/10 p-5">
                <div className="mb-5 flex items-center justify-between">
                  <p className="text-sm uppercase tracking-[0.3em] text-cyan-100">MayurOS Neural Grid</p>
                  <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Responsive / Premium / Immersive</p>
                </div>
                <div className="grid grid-cols-6 gap-3">
                  {Array.from({ length: 18 }).map((_, index) => (
                    <MotionDiv
                      key={index}
                      className="aspect-square rounded-2xl border border-white/8 bg-white/10"
                      animate={{ opacity: [0.35, 1, 0.45], scale: [0.94, 1.04, 0.98] }}
                      transition={{ duration: 2.2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.05 }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </MotionDiv>
      </div>
    </MotionSection>
  )
}

export function ContentSections({ onOpenResume }) {
  return (
    <>
      <SectionShell id="about" eyebrow="About" title="Origin Story" description="A story-driven profile of curiosity, discipline, and a growing mission to build useful systems that matter.">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[1.8rem] border border-white/10 bg-slate-950/45 p-6">
            <p className="text-base leading-8 text-slate-300">
              I am a consistent and hardworking Computer Engineering student with a CGPA of 9.8. My journey into technology started with curiosity and has grown into a strong passion for building real-world solutions.
            </p>
            <p className="mt-5 text-base leading-8 text-slate-300">
              I enjoy exploring new technologies, constantly learning, and improving my problem-solving skills. My goal is to become a software engineer capable of contributing to impactful products and solving complex real-world problems.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {strengths.map((strength) => (
                <div key={strength} className="rounded-[1.4rem] border border-cyan-300/14 bg-cyan-400/8 p-4 text-sm text-cyan-100">
                  {strength}
                </div>
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-slate-950/45 p-6">
            <div className="absolute bottom-10 left-8 top-10 w-px bg-gradient-to-b from-cyan-300 via-blue-400 to-transparent" />
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={item.title} className="relative pl-8">
                  <div className="absolute left-0 top-2 h-4 w-4 rounded-full border border-cyan-300/60 bg-cyan-300/20 shadow-[0_0_20px_rgba(103,232,249,0.55)]" />
                  <p className="text-xs uppercase tracking-[0.32em] text-cyan-200">0{index + 1}</p>
                  <h3 className="mt-2 font-orbitron text-lg uppercase tracking-[0.08em] text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-300">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell id="skills" eyebrow="Capabilities" title="Skill Matrix" description="An interactive systems map of the tools, languages, and engineering foundations powering MayurOS.">
        <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-5 md:grid-cols-2">
            {skillGroups.map((group) => {
              const Icon = group.icon
              return (
                <MotionDiv key={group.title} whileHover={{ y: -6, scale: 1.01 }} className="rounded-[1.8rem] border border-white/10 bg-white/6 p-6 shadow-[0_0_50px_rgba(79,172,254,0.06)]">
                  <div className="mb-5 flex items-center gap-3">
                    <div className="rounded-2xl border border-cyan-300/18 bg-cyan-400/10 p-3 text-cyan-200"><Icon size={18} /></div>
                    <h3 className="font-orbitron text-lg uppercase tracking-[0.08em] text-white">{group.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {group.skills.map((skill) => (
                      <span key={skill} className="rounded-full border border-white/10 bg-slate-950/55 px-4 py-2 text-sm text-slate-200">{skill}</span>
                    ))}
                  </div>
                </MotionDiv>
              )
            })}
          </div>
          <div className="space-y-5 rounded-[1.8rem] border border-white/10 bg-slate-950/55 p-6">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-cyan-200">Currently Learning</p>
              <h3 className="mt-3 font-orbitron text-2xl uppercase tracking-[0.08em] text-white">Upgrade Queue</h3>
            </div>
            <div className="space-y-5">
              {learningItems.map((item) => (
                <div key={item.name} className="space-y-2">
                  <div className="flex items-center justify-between text-sm text-slate-300">
                    <span>{item.name}</span>
                    <span>{item.progress}%</span>
                  </div>
                  <div className="h-3 overflow-hidden rounded-full bg-white/8">
                    <MotionDiv
                      className="h-full rounded-full bg-gradient-to-r from-cyan-300 via-blue-400 to-fuchsia-400"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.progress}%` }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="rounded-[1.6rem] border border-fuchsia-300/14 bg-fuchsia-400/8 p-5 text-sm leading-7 text-slate-300">
              I actively explore modern technologies, sharpen my backend foundation, and push my problem-solving ability through consistent practice and real product thinking.
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell id="projects" eyebrow="Deployments" title="Project Archive" description="A curated showcase of practical builds with hover depth, glowing surfaces, and systems-first storytelling.">
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <MotionArticle
              key={project.title}
              whileHover={{ y: -8, rotateX: -2, rotateY: index % 2 === 0 ? 2 : -2 }}
              transition={{ duration: 0.25 }}
              className="group rounded-[1.9rem] border border-white/12 bg-white/6 p-6 shadow-[0_0_70px_rgba(79,172,254,0.08)] backdrop-blur-2xl"
            >
              <div className="mb-6 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-cyan-200">Module 0{index + 1}</p>
                  <h3 className="mt-3 font-orbitron text-2xl uppercase tracking-[0.06em] text-white">{project.title}</h3>
                </div>
                <div className="rounded-full border border-cyan-300/20 bg-cyan-400/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-cyan-100">Live Ready</div>
              </div>
              <p className="text-sm leading-7 text-slate-300">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-3">
                {project.stack.map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-slate-950/55 px-4 py-2 text-xs uppercase tracking-[0.15em] text-slate-200">{item}</span>
                ))}
              </div>
              <ProjectButtons />
            </MotionArticle>
          ))}
        </div>
      </SectionShell>

      <SectionShell id="achievements" eyebrow="Signals" title="Achievements & Recognition" description="Milestones represented like system-wide performance badges and achievement counters.">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {achievements.map((item) => {
            const Icon = item.icon
            return (
              <MotionDiv key={item.label} whileHover={{ y: -6, scale: 1.02 }} className="rounded-[1.8rem] border border-white/10 bg-white/6 p-6 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-400/10 text-cyan-200"><Icon size={22} /></div>
                <p className="mt-5 font-orbitron text-2xl uppercase tracking-[0.06em] text-white">{item.value}</p>
                <p className="mt-2 text-sm text-slate-300">{item.label}</p>
              </MotionDiv>
            )
          })}
        </div>
      </SectionShell>

      <SectionShell id="opensource" eyebrow="Experiments" title="Open Source & Labs" description="A builder mindset that extends beyond projects into collaborative contribution, UI exploration, and technical experimentation.">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[1.8rem] border border-white/10 bg-slate-950/45 p-6">
            <h3 className="font-orbitron text-xl uppercase tracking-[0.08em] text-white">Open Source Contributions</h3>
            <p className="mt-4 text-sm leading-8 text-slate-300">I have contributed to open-source projects by improving documentation, fixing bugs, and enhancing UI components.</p>
          </div>
          <div className="rounded-[1.8rem] border border-white/10 bg-slate-950/45 p-6">
            <h3 className="font-orbitron text-xl uppercase tracking-[0.08em] text-white">Experimental Systems</h3>
            <p className="mt-4 text-sm leading-8 text-slate-300">I actively build experimental UI concepts and backend systems to explore new ideas and technologies.</p>
          </div>
        </div>
      </SectionShell>

      <SectionShell id="blog" eyebrow="Lab" title="Blogs & Experiments" description="A reserved chamber for future write-ups, architecture notes, and interactive engineering experiments.">
        <div className="rounded-[2rem] border border-dashed border-cyan-300/30 bg-cyan-400/6 px-6 py-14 text-center">
          <p className="font-orbitron text-3xl uppercase tracking-[0.18em] text-white">Coming Soon: Blogs & Experiments</p>
        </div>
      </SectionShell>

      <SectionShell id="dashboard" eyebrow="Telemetry" title="Live Dashboard" description="A placeholder control room for coding stats, contribution streams, and algorithmic progress dashboards.">
        <div className="grid gap-6 lg:grid-cols-2">
          {statsCards.map((card) => (
            <div key={card.title} className="rounded-[1.8rem] border border-white/10 bg-slate-950/45 p-6">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="font-orbitron text-xl uppercase tracking-[0.08em] text-white">{card.title}</p>
                  <p className="mt-2 text-sm text-cyan-200">{card.subtitle}</p>
                </div>
                <div className="rounded-full border border-emerald-300/20 bg-emerald-400/10 px-3 py-1 text-xs uppercase tracking-[0.28em] text-emerald-300">Sync Ready</div>
              </div>
              <div className="space-y-3">
                {card.lines.map((line) => (
                  <div key={line} className="rounded-2xl border border-white/8 bg-white/6 px-4 py-3 text-sm text-slate-300">{line}</div>
                ))}
              </div>
              <div className="mt-5">
                <MagneticButton href={card.href} external className="bg-white/6">
                  {card.ctaLabel}
                  <ExternalLink size={15} />
                </MagneticButton>
              </div>
            </div>
          ))}
        </div>
      </SectionShell>

      <SectionShell id="resume" eyebrow="Resume" title="Resume Access" description="Preview and download the resume through a dedicated modal viewer.">
        <div className="flex flex-wrap items-center justify-between gap-5 rounded-[1.8rem] border border-white/10 bg-slate-950/45 p-6">
          <div>
            <p className="font-orbitron text-xl uppercase tracking-[0.08em] text-white">Resume Portal</p>
            <p className="mt-3 text-sm leading-7 text-slate-300">Open the embedded viewer or download the latest resume directly from the portfolio.</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <MagneticButton onClick={onOpenResume}>View Resume<ExternalLink size={15} /></MagneticButton>
            <MagneticButton href={resumeUrl} external className="bg-white/6">Download Resume<Download size={15} /></MagneticButton>
          </div>
        </div>
      </SectionShell>

      <SectionShell id="contact" eyebrow="Connect" title="Contact Console" description="A futuristic communication panel with direct external links for collaboration, networking, and opportunity.">
        <div className="grid gap-5 md:grid-cols-3">
          {contactLinks.map((item) => {
            const Icon = item.icon
            return (
              <a key={item.title} href={item.href} target="_blank" rel="noreferrer" className="group rounded-[1.8rem] border border-white/10 bg-white/6 p-6 transition hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/10">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-300/18 bg-cyan-400/10 text-cyan-200"><Icon size={20} /></div>
                <p className="mt-5 font-orbitron text-xl uppercase tracking-[0.08em] text-white">{item.title}</p>
                <p className="mt-3 break-all text-sm leading-7 text-slate-300">{item.value}</p>
              </a>
            )
          })}
        </div>
      </SectionShell>
    </>
  )
}
