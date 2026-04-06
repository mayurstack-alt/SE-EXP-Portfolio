import {
  Award,
  Binary,
  Briefcase,
  Code2,
  Cpu,
  GraduationCap,
  Mail,
  MonitorPlay,
  Trophy,
} from 'lucide-react'

export const resumeUrl = '/mayur-jadhav-resume.pdf'
export const githubUrl = 'https://github.com/mayurstack-alt'
export const leetcodeUrl = 'https://leetcode.com/u/5AXdc2zSkw/'
export const emailAddress = 'thisismayur18@gmail.com'

export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Dashboard', href: '#dashboard' },
  { label: 'Contact', href: '#contact' },
]

export const typingLines = [
  'Building scalable systems...',
  'Solving real-world problems...',
  'Exploring modern technologies...',
]

export const strengths = [
  'Backend Development',
  'Data Structures & Algorithms',
  'Logical Thinking',
]

export const timeline = [
  {
    title: 'Curiosity Became Craft',
    text: 'My journey into technology started with curiosity and turned into a strong passion for building real-world solutions.',
  },
  {
    title: 'Academic Consistency',
    text: 'As a Computer Engineering student with a CGPA of 9.8, I bring discipline, consistency, and sharp learning habits into every build.',
  },
  {
    title: 'Mission Ahead',
    text: 'I want to become a software engineer who contributes to impactful products and solves complex real-world problems.',
  },
]

export const skillGroups = [
  { title: 'Languages', icon: Code2, skills: ['Python', 'JavaScript'] },
  { title: 'Frontend', icon: MonitorPlay, skills: ['React', 'Tailwind CSS'] },
  { title: 'Backend', icon: Cpu, skills: ['Express.js', 'Fastify', 'Next.js'] },
  { title: 'Database', icon: Binary, skills: ['PostgreSQL', 'Supabase', 'Firebase'] },
]

export const learningItems = [
  { name: 'System Design', progress: 82 },
  { name: 'Advanced Backend Architecture', progress: 74 },
  { name: 'Cloud Deployment Workflows', progress: 68 },
]

export const projects = [
  {
    title: 'Project Management System',
    description:
      'A full-stack web app where I built features to manage tasks, teams, and workflows efficiently.',
    stack: ['React', 'Express', 'PostgreSQL'],
  },
  {
    title: 'Netflix Frontend Clone',
    description:
      'A pixel-perfect UI clone focused on responsive design and modern frontend practices.',
    stack: ['React', 'Tailwind CSS', 'JavaScript'],
  },
  {
    title: 'Real-Time Chat Application',
    description:
      'A real-time messaging platform that enables seamless communication using modern backend technologies.',
    stack: ['Fastify', 'WebSockets', 'Firebase'],
  },
  {
    title: 'Motor Driving School SaaS Platform',
    description:
      'A deployed SaaS platform built for real users with workflows that support day-to-day operations.',
    stack: ['Next.js', 'Supabase', 'PostgreSQL'],
  },
]

export const achievements = [
  { label: 'Hackathons Participated', value: '4-5', icon: Trophy },
  { label: 'Hackathon Winner', value: 'MumbaiHacks', icon: Award },
  { label: 'Internship', value: 'L&T', icon: Briefcase },
  { label: 'Certifications', value: 'NPTEL', icon: GraduationCap },
]

export const statsCards = [
  {
    title: 'GitHub Activity',
    subtitle: 'Profile link active',
    href: githubUrl,
    ctaLabel: 'Open GitHub',
    lines: ['Username: mayurstack-alt', 'Explore repositories and coding activity', 'Profile opens in a new tab'],
  },
  {
    title: 'LeetCode Performance',
    subtitle: 'Practice profile active',
    href: leetcodeUrl,
    ctaLabel: 'Open LeetCode',
    lines: ['Username: 5AXdc2zSkw', 'Track problem-solving progress', 'Profile opens in a new tab'],
  },
]

export const contactLinks = [
  { title: 'Email', value: emailAddress, href: `mailto:${emailAddress}`, icon: Mail },
  { title: 'LeetCode', value: leetcodeUrl, href: leetcodeUrl, icon: Trophy },
  { title: 'GitHub', value: githubUrl, href: githubUrl, icon: Code2 },
]
