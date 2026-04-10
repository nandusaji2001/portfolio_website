"use client"

import Image from "next/image"
import Link from "next/link"
import { Bebas_Neue, Manrope } from "next/font/google"
import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import { useEffect } from "react"

const displayFont = Bebas_Neue({ subsets: ["latin"], weight: "400" })
const bodyFont = Manrope({ subsets: ["latin"], weight: ["400", "500", "700", "800"] })

const projects = [
  {
    title: "Multiple Disease Prediction using Machine Learning",
    description:
      "A machine learning application built with Python and Streamlit to estimate disease risk from clinical inputs. Implemented data preprocessing, model training and evaluation workflows, and an interactive UI so users can test predictions in real time.",
    image: "/multi_disease.jpg",
    technologies: ["Machine Learning", "Python", "Streamlit"],
    github: "https://github.com/nandusaji2001/Multiple-Disease-Prediction",
  },
  {
    title: "BlinkIt Sales Dashboard using PowerBI",
    description:
      "An interactive PowerBI dashboard for Blinkit sales analysis with KPI tracking, category-level breakdowns, and region-wise performance views. Used DAX calculations and visual storytelling to highlight trends, optimize reporting, and support better business decisions.",
    image: "/blinkit.png",
    technologies: ["PowerBI", "Data Analytics"],
    github: "https://github.com/nandusaji2001/Blinkit-Sales-Dashboard-PowerBI",
  },
  {
    title: "ServConnect - Hyperlocal Services and Community Platform",
    description:
      "Full-stack platform built with ASP.NET Core and Razor Pages, featuring role-based access, OTP authentication, subscriptions, elder-care workflows, community services, notifications, and IoT gas monitoring alerts.",
    image: "/servconnect.png",
    technologies: ["ASP.NET Core", ".NET", "Razor Pages", "RBAC", "IoT"],
    github: "https://github.com/nandusaji2001/ServConnect",
    live: "https://servconnect.xyz/",
  },
]

const internships = [
  {
    title: "React Intern",
    company: "Mystic Xyborgs",
    period: "Apr 2025",
    description:
      "Contributed to a banking application with authentication, secure money transfer flows, and role-based access control.",
  },
  {
    title: "Data Science Intern",
    company: "Luminar Technolab",
    period: "Dec 2023 - Jul 2024",
    description:
      "Built ML, Deep Learning, AI, and NLP projects using Python, SQL, PowerBI, and cloud deployment workflows.",
  },
]

const skills = ["Python", "Machine Learning", "React", "Deep Learning", "Java", "C++", "MongoDB", "Git", "PowerBI", "SQL"]

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Work / Portfolio" },
  { href: "#experience", label: "Internships" },
  { href: "#contact", label: "Contact" },
]

export default function PortfolioPage() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".reveal")
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.16 },
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  return (
    <main className={`${bodyFont.className} portfolio-wrap`}>
      <section id="home" className="hero-shell">
        <nav className="nav-pill">
          {navItems.map((item, index) => (
            <Link key={item.href} href={item.href} className={`nav-link ${index === 0 ? "active" : ""}`}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hero-card">
          <div className="hero-glow" aria-hidden />
          <h1 className={`${displayFont.className} hero-name`} aria-label="Nandu Saji">
            {Array.from("Nandu Saji").map((char, index) => (
              <span
                key={`${char}-${index}`}
                className={char === " " ? "hero-space" : "hero-letter"}
                style={{ animationDelay: `${index * 45}ms` }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>

          <div className="hero-content">
            <div className="hero-copy fade-up">
              <p className="hero-tag">I design and build practical digital products.</p>
              <p className="hero-sub">
                Software Developer at Hudson Software Solutions, specializing in machine learning, analytics, and human-centered web experiences.
              </p>
              <div className="hero-socials">
                <Link href="https://x.com" aria-label="X" target="_blank" rel="noreferrer" className="icon-link">
                  x
                </Link>
                <Link
                  href="https://www.linkedin.com/in/nandu-saji"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-link"
                >
                  <Linkedin size={16} />
                </Link>
                <Link
                  href="https://github.com/nandusaji2001"
                  aria-label="GitHub"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-link"
                >
                  <Github size={16} />
                </Link>
              </div>
            </div>

            <div className="portrait-wrap slide-in">
              <Image
                src="/profile_new.png"
                alt="Nandu Saji portrait"
                width={620}
                height={760}
                className="portrait"
                priority
              />
            </div>

            <div className="hero-side fade-up-delay">
              <p>
                Blending design thinking with engineering discipline to create products that are useful, usable, and
                memorable.
              </p>
              <Link href="#contact" className="cta-link">
                Let&apos;s Talk <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section about-grid reveal">
        <div>
          <p className="section-kicker">// About</p>
          <p className="muted">
            I started with a BSc in Nautical Science and moved into software because I enjoy solving hard problems and
            building products people actually use.
          </p>
          <div className="skill-list">
            {skills.map((skill) => (
              <span key={skill} className="skill-chip">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h2 className={`${displayFont.className} section-heading`}>Capturing impact, not just code.</h2>
          <div className="stats-row">
            <article>
              <h3>+240</h3>
              <p>Practical hours invested in ML, analytics, and product development.</p>
            </article>
            <article>
              <h3>+20</h3>
              <p>End-to-end prototypes, assignments, dashboards, and experiments completed.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="projects" className="section section-projects reveal">
        <div className="section-header">
          <p className="section-kicker">// Work</p>
          <h2 className={`${displayFont.className} section-title`}>Selected Projects</h2>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <article key={project.title} className="project-card reveal" style={{ transitionDelay: `${index * 120}ms` }}>
              <div className="project-image-wrap">
                <Image src={project.image} alt={project.title} fill className="project-image" />
              </div>
              <div className="project-body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-row">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <Link href={project.github} target="_blank" rel="noreferrer" className="repo-link">
                    GitHub <ArrowUpRight size={16} />
                  </Link>
                  {project.live ? (
                    <Link href={project.live} target="_blank" rel="noreferrer" className="repo-link">
                      Live Site <ArrowUpRight size={16} />
                    </Link>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="section reveal">
        <div className="section-header">
          <p className="section-kicker">// Internship</p>
          <h2 className={`${displayFont.className} section-title`}>Experience Snapshot</h2>
        </div>
        <div className="timeline">
          {internships.map((item, index) => (
            <article key={item.title} className="timeline-item reveal" style={{ transitionDelay: `${index * 120}ms` }}>
              <div className="timeline-period">{item.period}</div>
              <div>
                <h3>
                  {item.title} <span>@ {item.company}</span>
                </h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="section contact-grid reveal">
        <div>
          <p className="section-kicker">// Contact</p>
          <h2 className={`${displayFont.className} section-title`}>Let&apos;s Build Something Real</h2>
          <p className="muted">
            If you have a role, project, or collaboration in mind, I&apos;d love to hear about it.
          </p>
          <div className="contact-list">
            <p>
              <Mail size={16} /> nandusaji20012001@gmail.com
            </p>
            <p>
              <Phone size={16} /> +91 9744892806
            </p>
            <p>
              <MapPin size={16} /> Kattappana, Idukki
            </p>
          </div>
        </div>

        <form action="https://formspree.io/f/mjkebogb" method="POST" className="contact-form">
          <input name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Email Address" required />
          <textarea name="message" placeholder="Your Message" rows={5} required />
          <button type="submit">Send Message</button>
        </form>
      </section>

      <footer className="portfolio-footer reveal">
        <p>© {new Date().getFullYear()} Nandu Saji</p>
        <div>
          <Link href="https://github.com/nandusaji2001" target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github size={18} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/nandu-saji"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </Link>
        </div>
      </footer>

      <style jsx global>{`
        .portfolio-wrap {
          --page-pad: 1rem;
          min-height: 100vh;
          color: #eef1f6;
          background:
            radial-gradient(circle at 20% 10%, rgba(92, 138, 255, 0.26), transparent 42%),
            radial-gradient(circle at 78% 16%, rgba(14, 228, 167, 0.2), transparent 36%),
            linear-gradient(170deg, #070a11 0%, #0d1018 46%, #131722 100%);
          background-size: 140% 140%;
          padding: 0 var(--page-pad);
          animation: bgShift 20s ease-in-out infinite alternate;
        }

        .section,
        .portfolio-footer {
          width: min(1280px, 100%);
          margin-inline: auto;
        }

        .hero-shell {
          width: calc(100% + (var(--page-pad) * 2));
          margin-inline: calc(var(--page-pad) * -1);
        }

        .nav-pill {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 0.35rem;
          padding: 0.4rem;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.16);
          margin-bottom: 1rem;
        }

        .nav-link {
          text-align: center;
          font-size: 0.84rem;
          color: #c8cfde;
          text-decoration: none;
          border-radius: 999px;
          padding: 0.6rem 0.35rem;
          transition: all 0.25s ease;
        }

        .nav-link:hover {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.12);
        }

        .nav-link.active {
          color: #ffffff;
          background: linear-gradient(120deg, #4876ff, #2bb7f6);
        }

        .hero-card {
          position: relative;
          overflow: hidden;
          border-radius: 2rem;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: linear-gradient(135deg, rgba(4, 8, 18, 0.92), rgba(8, 12, 24, 0.74));
          min-height: 76vh;
          padding: clamp(1rem, 2.2vw, 1.5rem);
        }

        .hero-glow {
          position: absolute;
          inset: auto;
          left: 50%;
          top: 56%;
          transform: translate(-50%, -50%);
          width: min(680px, 90vw);
          aspect-ratio: 1;
          border-radius: 50%;
          background:
            radial-gradient(circle at center, rgba(81, 117, 245, 0.45) 0%, rgba(114, 59, 220, 0.34) 35%, transparent 70%);
          filter: blur(5px);
          pointer-events: none;
          animation: pulseGlow 7s ease-in-out infinite;
        }

        .hero-name {
          position: absolute;
          top: 1rem;
          left: 1rem;
          right: 1rem;
          margin: 0;
          line-height: 0.8;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          font-size: clamp(7rem, 25vw, 24rem);
          text-align: center;
          color: rgba(244, 247, 255, 0.95);
          z-index: 1;
          pointer-events: none;
          white-space: nowrap;
        }

        .hero-letter,
        .hero-space {
          display: inline-block;
        }

        .hero-letter {
          pointer-events: auto;
          transition: transform 0.22s ease, text-shadow 0.22s ease, color 0.22s ease, filter 0.22s ease;
          animation: letterIdle 3.8s ease-in-out infinite alternate;
        }

        .hero-letter:hover {
          color: #ffffff;
          transform: translateY(-8px) scale(1.08);
          text-shadow: 0 0 10px rgba(121, 188, 255, 0.98), 0 0 26px rgba(96, 129, 255, 0.95), 0 0 48px rgba(71, 79, 255, 0.65);
          filter: drop-shadow(0 0 20px rgba(95, 168, 255, 0.8));
        }

        .hero-space {
          width: 0.32em;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          min-height: calc(76vh - 3rem);
          display: grid;
          grid-template-columns: minmax(220px, 1fr) minmax(300px, 1.2fr) minmax(220px, 1fr);
          align-items: end;
          gap: 1rem;
          pointer-events: none;
        }

        .hero-copy,
        .hero-side {
          max-width: 320px;
          padding-bottom: 1rem;
          pointer-events: auto;
        }

        .hero-tag {
          font-size: 0.95rem;
          color: #d6def4;
          margin-bottom: 0.9rem;
          line-height: 1.45;
        }

        .hero-sub {
          font-size: 0.87rem;
          color: #aab5cb;
          line-height: 1.55;
          margin-bottom: 1rem;
        }

        .hero-socials {
          display: flex;
          gap: 0.55rem;
        }

        .icon-link {
          width: 2rem;
          height: 2rem;
          border-radius: 50%;
          display: grid;
          place-items: center;
          text-decoration: none;
          border: 1px solid rgba(255, 255, 255, 0.24);
          color: #dce3f4;
          background: rgba(255, 255, 255, 0.06);
        }

        .icon-link:hover {
          color: #ffffff;
          border-color: rgba(255, 255, 255, 0.48);
          transform: translateY(-1px);
        }

        .portrait-wrap {
          position: relative;
          align-self: end;
          justify-self: center;
          width: min(640px, 100%);
          pointer-events: none;
        }

        .portrait {
          width: 100%;
          height: auto;
          max-height: 74vh;
          object-fit: contain;
          object-position: center bottom;
          filter: drop-shadow(0 20px 55px rgba(0, 0, 0, 0.6));
          pointer-events: none;
        }

        .hero-side {
          justify-self: end;
        }

        .hero-side p {
          font-size: 0.87rem;
          color: #c4cee1;
          margin-bottom: 1rem;
          line-height: 1.6;
        }

        .cta-link {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          text-decoration: none;
          font-weight: 700;
          font-size: 0.85rem;
          border-radius: 999px;
          color: #ffffff;
          background: linear-gradient(120deg, #4876ff, #2bb7f6);
          padding: 0.62rem 1rem;
        }

        .section {
          padding: clamp(2rem, 5vw, 4rem) 0;
        }

        .section-projects {
          padding-top: clamp(0.8rem, 2vw, 1.3rem);
        }

        .about-grid,
        .contact-grid {
          display: grid;
          gap: 1.5rem;
          grid-template-columns: 1fr 1.2fr;
        }

        .section-kicker {
          color: #6ab9ff;
          font-weight: 700;
          font-size: 0.84rem;
          margin-bottom: 1rem;
        }

        .section-heading,
        .section-title {
          font-size: clamp(3rem, 8vw, 5.8rem);
          line-height: 0.9;
          margin: 0 0 1rem;
          color: #f7f9ff;
        }

        .section-title {
          font-size: clamp(2.8rem, 7vw, 4.4rem);
          margin-bottom: 0;
        }

        .muted {
          color: #a7b3cb;
          line-height: 1.65;
          max-width: 48ch;
        }

        .skill-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.55rem;
          margin-top: 1.15rem;
        }

        .skill-chip {
          font-size: 0.76rem;
          padding: 0.4rem 0.7rem;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.07);
          border: 1px solid rgba(255, 255, 255, 0.14);
          color: #d8deeb;
        }

        .stats-row {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 1rem;
          margin-top: 1rem;
        }

        .stats-row article {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 1rem;
          padding: 1rem;
        }

        .stats-row h3 {
          margin: 0;
          font-size: 3rem;
          line-height: 1;
          color: #f4f7ff;
        }

        .stats-row p {
          margin-top: 0.5rem;
          color: #aab6cf;
          font-size: 0.93rem;
        }

        .section-header {
          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: 1rem;
          margin-bottom: 1.25rem;
        }

        .project-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1rem;
        }

        .project-card {
          overflow: hidden;
          border-radius: 1.3rem;
          background: rgba(10, 14, 26, 0.76);
          border: 1px solid rgba(255, 255, 255, 0.13);
          transition: transform 0.25s ease, border-color 0.25s ease;
        }

        .project-card:hover {
          transform: translateY(-4px);
          border-color: rgba(125, 186, 255, 0.8);
        }

        .project-image-wrap {
          position: relative;
          aspect-ratio: 16 / 9;
          overflow: hidden;
        }

        .project-image {
          object-fit: cover;
        }

        .project-body {
          padding: 1rem;
        }

        .project-body h3 {
          margin: 0;
          font-size: 1.05rem;
          color: #f5f8ff;
        }

        .project-body p {
          margin: 0.6rem 0;
          color: #b8c2d7;
          line-height: 1.6;
          font-size: 0.91rem;
        }

        .tech-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
          margin-bottom: 0.9rem;
        }

        .tech-row span {
          font-size: 0.73rem;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.14);
          background: rgba(255, 255, 255, 0.06);
          padding: 0.3rem 0.6rem;
        }

        .repo-link {
          display: inline-flex;
          align-items: center;
          gap: 0.34rem;
          color: #8ad0ff;
          font-size: 0.84rem;
          text-decoration: none;
          font-weight: 700;
        }

        .project-links {
          display: flex;
          align-items: center;
          gap: 0.9rem;
          flex-wrap: wrap;
        }

        @media (max-width: 1200px) {
          .project-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        .timeline {
          display: grid;
          gap: 0.9rem;
        }

        .timeline-item {
          display: grid;
          grid-template-columns: 140px 1fr;
          gap: 1rem;
          padding: 1rem;
          border-radius: 1rem;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.12);
        }

        .timeline-period {
          color: #86caff;
          font-size: 0.84rem;
          font-weight: 700;
        }

        .timeline-item h3 {
          margin: 0;
          color: #f4f7ff;
          font-size: 1.1rem;
        }

        .timeline-item h3 span {
          color: #9bb0d4;
          font-weight: 500;
          font-size: 0.95rem;
        }

        .timeline-item p {
          margin: 0.45rem 0 0;
          color: #b9c4da;
          line-height: 1.6;
        }

        .contact-list {
          margin-top: 1rem;
          display: grid;
          gap: 0.5rem;
        }

        .contact-list p {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          margin: 0;
          color: #d7def0;
        }

        .contact-form {
          display: grid;
          gap: 0.7rem;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 1rem;
          padding: 1rem;
        }

        .contact-form input,
        .contact-form textarea {
          width: 100%;
          border-radius: 0.7rem;
          border: 1px solid rgba(255, 255, 255, 0.2);
          background: rgba(1, 5, 12, 0.5);
          color: #f1f5ff;
          font: inherit;
          padding: 0.7rem 0.8rem;
        }

        .contact-form input::placeholder,
        .contact-form textarea::placeholder {
          color: #95a4c2;
        }

        .contact-form button {
          border: 0;
          border-radius: 999px;
          padding: 0.7rem 1rem;
          font: inherit;
          font-weight: 800;
          color: #fff;
          background: linear-gradient(120deg, #4876ff, #2bb7f6);
          cursor: pointer;
        }

        .portfolio-footer {
          border-top: 1px solid rgba(255, 255, 255, 0.14);
          margin-top: 1.25rem;
          padding: 1rem 0 1.8rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: #9fb0ce;
          font-size: 0.82rem;
        }

        .portfolio-footer div {
          display: flex;
          gap: 0.7rem;
        }

        .portfolio-footer a {
          color: #d6dded;
        }

        .reveal {
          opacity: 0;
          transform: translateY(26px) scale(0.98);
          transition: opacity 0.72s ease, transform 0.72s cubic-bezier(0.2, 0.7, 0.1, 1);
        }

        .reveal.is-visible {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .fade-up {
          animation: fadeUp 0.85s ease both;
        }

        .fade-up-delay {
          animation: fadeUp 0.85s ease 0.18s both;
        }

        .slide-in {
          animation: slideIn 0.95s ease 0.08s both;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(14px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes pulseGlow {
          0%,
          100% {
            transform: translate(-50%, -50%) scale(0.96);
            opacity: 0.8;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.04);
            opacity: 1;
          }
        }

        @keyframes bgShift {
          0% {
            background-position: 0% 40%;
          }
          100% {
            background-position: 100% 60%;
          }
        }

        @keyframes letterIdle {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-2px);
          }
        }

        @media (max-width: 980px) {
          .hero-card {
            min-height: auto;
            padding-top: 1.15rem;
            padding-bottom: 1rem;
          }

          .hero-content {
            grid-template-columns: 1fr;
            justify-items: center;
            text-align: center;
            gap: 0.6rem;
            padding-top: clamp(4.5rem, 14vw, 7.2rem);
          }

          .hero-copy,
          .hero-side {
            justify-self: center;
            max-width: min(92vw, 560px);
            padding-bottom: 0;
          }

          .portrait-wrap {
            width: min(420px, 92vw);
          }

          .portrait {
            max-height: 52vh;
          }

          .hero-socials {
            justify-content: center;
          }

          .hero-name {
            font-size: clamp(4.2rem, 16vw, 9.5rem);
            text-align: center;
            top: 0.65rem;
            left: 0.35rem;
            right: 0.35rem;
          }

          .hero-side p {
            margin-inline: auto;
          }

          .about-grid,
          .contact-grid,
          .project-grid {
            grid-template-columns: 1fr;
          }

          .section-header {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        @media (max-width: 660px) {
          .portfolio-wrap {
            --page-pad: 0.65rem;
          }

          .hero-card {
            border-radius: 1.25rem;
          }

          .hero-content {
            gap: 0.85rem;
            padding-top: clamp(3.8rem, 22vw, 5.5rem);
          }

          .nav-pill {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            border-radius: 1rem;
          }

          .hero-name {
            font-size: clamp(2.8rem, 18vw, 5.3rem);
            line-height: 0.84;
            letter-spacing: 0.01em;
          }

          .hero-space {
            width: 0.2em;
          }

          .portrait-wrap {
            width: min(320px, 88vw);
          }

          .portrait {
            max-height: 42vh;
          }

          .hero-tag {
            font-size: 0.88rem;
          }

          .hero-sub,
          .hero-side p {
            font-size: 0.82rem;
          }

          .timeline-item {
            grid-template-columns: 1fr;
          }

          .portfolio-footer {
            flex-direction: column;
            gap: 0.75rem;
          }
        }

        @media (hover: none) {
          .hero-letter {
            animation: none;
          }

          .hero-letter:hover {
            transform: none;
            text-shadow: none;
            filter: none;
          }
        }
      `}</style>
    </main>
  )
}
