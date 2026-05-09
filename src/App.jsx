import { ExternalLink, Mail, MapPin, Menu, Phone, Sparkles, X } from 'lucide-react'
import { useState } from 'react'
import { motion } from "framer-motion"
import profileImg from "./assets/hero.png";


function GithubIcon({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

function LinkedinIcon({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

const skills = [
  'Python',
  'Flutter',
  'C',
  'C++',
  'Java',
  'NLP',
  'Git',
  'Cybersecurity',
  'Machine Learning',
  'Deep Learning',
  'Data Analytics',
]

const projects = [
  {
    title: 'SecProbe',
    description:
      'A web-based cybersecurity auditing platform developed using Flask to analyze websites across network, web, and SSL/TLS security layers. The system performs automated vulnerability checks including HTTP security headers, HTTPS enforcement, SSL certificate validation, and exposed service detection using Nmap integration. Designed an intelligent risk-scoring engine capable of converting technical vulnerabilities into readable security grades and remediation summaries.',
    technologies: ['Python', 'Flask', 'Nmap', 'SSL/TLS', 'Cybersecurity', 'REST APIs'],
    githubUrl: 'https://github.com/ayusheeee/SecProbe',
    showGithub: true,
    liveUrl: null,
  },
  {
    title: 'eBallot',
    description:
      'A secure cross-platform digital voting platform built in Flutter with a strong focus on authentication, privacy, and scalability. The application integrates voter ID verification workflows, facial authentication mechanisms, anonymous vote submission architecture, and modular election management systems while maintaining a clean and accessible user experience.' ,
    technologies: ['Flutter', 'Dart', 'Authentication', 'APIs', 'Mobile Development', 'UI/UX'],
    githubUrl: 'https://github.com/ayusheeee/eBallot',
    showGithub: true,
    liveUrl: null,
  },
  {
    title: 'De Novo Discovery Engine for Biodiversity Detection',
    description:
    'An AI-driven biodiversity detection engine developed for identifying known and potentially novel deep-sea organisms using environmental DNA datasets. The project leveraged DNABERT embeddings and HDBSCAN clustering techniques to analyze noisy biological sequence data and detect emerging biodiversity patterns. Proposed a Novelty Persistence Score (NPS) framework to improve reliability in novel sequence identification and developed a visualization interface for sequence analysis.',
    technologies: ['Python', 'DNABERT', 'HDBSCAN', 'NLP', 'Machine Learning', 'Bioinformatics'],
    githubUrl: null,
    showGithub: false,
    liveUrl: null,
  },
 
]

const experiences = [
  {
    role: 'Advisory Intern — AI/ML Engineer',
    organization: 'EdCIL (India) Limited',
    period: '2026 – Present',
    summary:
      'Working on AI/ML-driven solutions and research-oriented development workflows focused on intelligent systems, automation, and digital innovation. Contributing across model experimentation, technical documentation, product ideation, and solution development within advisory and technology-focused environments.',
  },

  {
    role: 'Open Source Contributor',
    organization: 'GirlScript Summer of Code (GSSoC) 2026',
    period: '2026 – Present',
    summary:
      'Actively contributing to open-source projects through GSSoC 2026 with focus on feature implementation, UI improvements, debugging, collaborative Git/GitHub workflows, and development across community-driven projects.',
  },

  {
    role: 'Independent AI/ML & Product Developer',
    organization: 'Personal Projects & Research',
    period: '2024 – Present',
    summary:
      'Building projects across AI/ML, cybersecurity, NLP, and Flutter development including secure systems, intelligent analysis tools, biodiversity detection engines, and scalable digital platforms focused on usability and real-world impact.',
  },

  {
    role: 'Digital Communication & Content Strategy',
    organization: 'Student & Organizational Initiatives',
    period: '2023 – 2025',
    summary:
      'Worked across digital communication, branding, website management, content strategy, design coordination, and audience engagement for student-led initiatives, conferences, and collaborative projects.',
  },
]

function SectionHeading({ title, subtitle }) {
  return (
    <div className="mb-10 text-center">
      <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">{title}</h2>
      {subtitle && <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">{subtitle}</p>}
    </div>
  )
}

function Navbar() {
  const [open, setOpen] = useState(false)

  const goTo = (id) => {
    const node = document.getElementById(id)
    if (node) {
      node.scrollIntoView({ behavior: 'smooth' })
      setOpen(false)
    }
  }

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-border bg-card/90 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 text-xl font-bold text-primary"
            type="button"
          >
            <Sparkles className="h-4 w-4" />
            Ayushi Tripathi
          </button>

          <div className="hidden gap-8 md:flex">
            {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => goTo(item.toLowerCase())}
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                {item}
              </button>
            ))}
          </div>

          <button
            className="text-foreground md:hidden"
            onClick={() => setOpen((v) => !v)}
            type="button"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="pb-4 md:hidden">
            <div className="flex flex-col gap-4">
              {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => goTo(item.toLowerCase())}
                  className="text-left text-muted-foreground transition-colors hover:text-primary"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden px-6 pt-20">

      
      <div className="absolute left-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-primary/10 blur-3xl"></div>

      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[1fr_0.95fr]">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >

          {/* SMALL LABEL */}
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.28em] text-primary">
            Personal Portfolio
          </p>

          {/* MAIN HEADING */}
          <h1 className="max-w-xl text-6xl font-bold leading-[1.02] tracking-tight text-foreground md:text-7xl">
            Ayushi Tripathi
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-8 max-w-2xl text-[1.12rem] leading-[2] text-muted-foreground">

            Computer Science undergraduate focused on AI/ML,
            cybersecurity, and modern digital product development;
            currently working as an AI/ML Engineering Intern at
            EdCIL India Limited while contributing to open-source
            projects through GSSoC 2026 and building intelligent,
            user-focused systems across security and application
            development.

          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex items-center gap-4">

            <a
              href="#projects"
              className="rounded-2xl bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all duration-300 hover:-translate-y-1 hover:bg-primary/90 hover:shadow-lg"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-2xl border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
            >
              Contact Me
            </a>

          </div>

        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="relative flex justify-center lg:justify-end"
        >

          {/* CARD */}
          <div className="relative w-[440px] rounded-[1.7rem] border border-border bg-card/95 p-4 shadow-lg backdrop-blur-xl">

            {/* IMAGE */}
            <div className="overflow-hidden rounded-[1.4rem]">
              <img
                src={profileImg}
                alt="Ayushi Tripathi"
                className="h-[340px] w-full rounded-[1.4rem] object-cover"
              />
            </div>

            {/* INFO */}
            <div className="mt-5 text-center">

              <div className="grid grid-cols-1 gap-2.5 text-sm">

                {/* EDUCATION */}
                <div className="rounded-2xl bg-muted/40 px-4 py-3 text-center">

                  <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    Education
                  </p>

                  <p className="mt-1 text-[0.98rem] font-medium text-foreground">
                    B.Tech CSE
                  </p>

                  <p className="text-[0.92rem] text-muted-foreground">
                    Amity University
                  </p>

                </div>

                {/* FOCUS */}
                <div className="rounded-2xl bg-muted/40 px-4 py-3 text-center">

                  <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    Focus
                  </p>

                  <p className="mt-1 text-[0.95rem] leading-7 text-foreground">
                    Artificial Intelligence · Machine Learning
                    <br />
                    Cybersecurity
                  </p>

                </div>

                {/* LOCATION */}
                <div className="rounded-2xl bg-muted/40 px-4 py-3 text-center">

                  <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    Based In
                  </p>

                  <p className="mt-1 text-[0.95rem] text-foreground">
                    New Delhi, India
                  </p>

                </div>

              </div>

              {/* SOCIALS */}
              <div className="mt-5 flex items-center justify-center gap-3">

                <a
                  href="https://github.com/ayusheeee"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-xl bg-muted text-foreground transition-all duration-300 hover:-translate-y-1 hover:bg-muted/70"
                >
                  <GithubIcon className="h-5 w-5" />
                </a>

                <a
                  href="https://www.linkedin.com/in/ayushi-tripathi-424536277/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-xl bg-muted text-foreground transition-all duration-300 hover:-translate-y-1 hover:bg-muted/70"
                >
                  <LinkedinIcon className="h-5 w-5" />
                </a>

                <a
                  href="mailto:ayushi2005tripathi@gmail.com"
                  className="flex h-11 w-11 items-center justify-center rounded-xl bg-muted text-foreground transition-all duration-300 hover:-translate-y-1 hover:bg-muted/70"
                >
                  <Mail className="h-5 w-5" />
                </a>

              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  )
}


function AboutSection() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="bg-muted/30 px-4 py-24"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          title="About"
        />

        <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
          <p className="mb-6 text-lg leading-8 text-foreground">
            I’m a Computer Science undergraduate at with a
            strong interest in artificial intelligence, machine learning,
            cybersecurity, and product-focused development. I enjoy building
            systems that combine technical depth with usability whether that’s
            through AI-driven applications, secure digital platforms, or
            intuitive user experiences.
          </p>

          <p className="mb-6 text-lg leading-8 text-foreground">
            Over the past few years, I’ve worked on projects ranging from
            AI-powered biodiversity detection systems and cybersecurity auditing
            tools to secure digital voting platforms and NLP-based resume
            analysis engines. Alongside development, my background in
            leadership, communication, graphic designing, and content strategy has helped
            me approach technology with both technical and creative
            perspectives.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            
            <div className="rounded-xl border border-border bg-muted/40 p-6">
              <h3 className="mb-4 text-xl font-semibold text-foreground">
                Education
              </h3>

              <div className="space-y-4">
                <div>
                  <p className="font-medium text-foreground">
                    B.Tech in Computer Science
                  </p>

                  <p className="text-muted-foreground">
                    Amity University, Noida
                  </p>

                  <p className="text-sm text-muted-foreground">
                    2023 – 2027
                  </p>

                  <p className="mt-1 text-sm text-muted-foreground">
                    Specialization in Artificial Intelligence & Machine Learning
                  </p>

                  <p className="text-sm text-muted-foreground">
                    Current CGPA: 7.85
                  </p>
                </div>

                <div className="border-t border-border pt-4">
                  <p className="font-medium text-foreground">
                    Senior Secondary Education (Class XII)
                  </p>

                  <p className="text-muted-foreground">
                    Queen’s Valley School, Dwarka
                  </p>

                  <p className="text-sm text-muted-foreground">
                    Science Stream
                  </p>

                  <p className="text-sm text-muted-foreground">
                    Percentage: 86.2%
                  </p>
                </div>

                <div className="border-t border-border pt-4">
                  <p className="font-medium text-foreground">
                    Secondary Education (Class X)
                  </p>

                  <p className="text-muted-foreground">
                    Queen’s Valley School, Dwarka
                  </p>

                  <p className="text-sm text-muted-foreground">
                    Percentage: 96.2%
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-muted/40 p-6">
              <h3 className="mb-4 text-xl font-semibold text-foreground">
                Interests & Focus Areas
              </h3>

              <div className="space-y-4 text-muted-foreground">
                <p>
                  Artificial Intelligence, Machine Learning, and NLP-based
                  systems focused on solving practical real-world problems.
                </p>

                <p>
                  Cybersecurity, secure authentication systems, and privacy-first
                  digital platforms.
                </p>

                <p>
                  Flutter and cross-platform application development with an
                  emphasis on scalability and intuitive UI/UX.
                </p>

                <p>
                  Open-source collaboration, research-driven development, and
                  product-oriented problem solving.
                </p>

                <p>
                  Creative writing, public speaking, digital design, and
                  communication.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </motion.section>
  )
}

function SkillsSection() {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="bg-background px-4 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Skills"
          subtitle="A growing toolkit shaped through internships, research projects, open-source contributions, and hands-on experimentation."
        />

        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground transition-all duration-300 hover:-translate-y-1 hover:border-primary/50"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

function ProjectsSection() {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="bg-muted/30 px-4 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Projects"
          subtitle="Projects exploring AI/ML, cybersecurity, NLP, and scalable application development with a focus on practical problem-solving and real-world usability."
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="group rounded-2xl border border-border bg-card p-7 shadow-sm hover:border-primary/50 hover:shadow-xl"
            >
              <h3 className="mb-3 text-2xl font-semibold text-foreground">
                {project.title}
              </h3>

              <p className="mb-6 whitespace-pre-line leading-7 text-muted-foreground">
                {project.description}
              </p>

              <div className="mb-6 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-accent/30 bg-accent/20 px-3 py-1 text-xs font-medium text-accent-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3">
                {project.showGithub && project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    <GithubIcon className="h-4 w-4" />
                    GitHub Repo
                  </a>
                ) : null}

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/50"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

function ExperienceSection() {
  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="bg-background px-4 py-24"
    >

      <div className="mx-auto max-w-5xl">

        <SectionHeading
          title="Experience"
          subtitle="Professional experience, open-source contributions, and independent development work across AI/ML, cybersecurity, and digital product development."
        />

        <div className="space-y-5">

          {experiences.map((experience) => (

            <motion.article
              key={experience.role}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="rounded-[1.8rem] border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
            >

              {/* TOP */}
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">

                <div>

                  <h3 className="text-[1.35rem] font-semibold tracking-tight text-foreground">
                    {experience.role}
                  </h3>

                  <p className="mt-1 text-[1rem] text-muted-foreground">
                    {experience.organization}
                  </p>

                </div>

                <div className="w-fit rounded-full bg-muted px-4 py-2 text-sm font-medium text-muted-foreground">
                  {experience.period}
                </div>

              </div>

              {/* DESCRIPTION */}
              <p className="mt-6 leading-8 text-muted-foreground">
                {experience.summary}
              </p>

            </motion.article>

          ))}

        </div>

      </div>

    </motion.section>
  )
}

function ContactSection() {
  return (
    <section id="contact" className="bg-muted/30 px-4 py-24 fade-in">

      <div className="mx-auto max-w-4xl">

        <SectionHeading
          title="Contact"
          subtitle="Open to internships, collaborations, research opportunities, and interesting product ideas."
        />

        <div className="rounded-[1.8rem] border border-border bg-card p-8 shadow-sm">

          <p className="mb-8 text-center text-lg leading-8 text-muted-foreground">
            I&apos;m always open to discussing projects, collaborations,
            internships, research opportunities, and innovative ideas
            across AI/ML, cybersecurity, and software development.
          </p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

            {/* EMAIL */}
            <div className="flex flex-col items-center rounded-2xl border border-border bg-muted/30 p-5 text-center">

              <div className="mb-4 rounded-full border border-primary/20 bg-primary/10 p-4">
                <Mail className="h-6 w-6 text-primary" />
              </div>

              <h3 className="mb-2 font-semibold text-foreground">
                Email
              </h3>

              <a
                href="mailto:ayushi2005tripathi@gmail.com"
                className="text-sm text-primary hover:underline"
              >
                ayushi2005tripathi@gmail.com
              </a>

            </div>

            {/* LINKEDIN */}
            <div className="flex flex-col items-center rounded-2xl border border-border bg-muted/30 p-5 text-center">

              <div className="mb-4 rounded-full border border-primary/20 bg-primary/10 p-4">
                <LinkedinIcon className="h-6 w-6 text-primary" />
              </div>

              <h3 className="mb-2 font-semibold text-foreground">
                LinkedIn
              </h3>

              <a
                href="https://www.linkedin.com/in/ayushi-tripathi-424536277/"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-primary hover:underline"
              >
                Coonect with me
              </a>

            </div>

            {/* LOCATION */}
            <div className="flex flex-col items-center rounded-2xl border border-border bg-muted/30 p-5 text-center">

              <div className="mb-4 rounded-full border border-primary/20 bg-primary/10 p-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>

              <h3 className="mb-2 font-semibold text-foreground">
                Location
              </h3>

              <p className="text-sm text-muted-foreground">
                New Delhi, India
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-border bg-card py-8 text-center fade-in">
      <p className="text-sm text-muted-foreground">© 2026 Ayushi Tripathi. All rights reserved.</p>
    </footer>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App
