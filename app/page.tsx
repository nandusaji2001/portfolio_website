"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Eye } from "lucide-react"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Download,
  Menu,
  X,
  Code,
  Zap,
  Star,
  ArrowRight,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Projects: removed the Weather Dashboard as requested
  const projects = [
  {
    title: "Multiple Disease Prediction using Machine Learning",
    description:
      "A machine learning-based project that predicts the likelihood of multiple diseases using Python and Streamlit.",
    image: "/multi_disease.jpg",
    technologies: ["Machine Learning", "Python", "Streamlit"],
    github: "https://github.com/nandusaji2001/Multiple-Disease-Prediction",
    featured: true,
  },
  {
    title: "BlinkIt Sales Dashboard using PowerBI",
    description:
      "An interactive PowerBI dashboard analyzing Blinkit sales data using charts and DAX functions.",
    image: "/blinkit.png",
    technologies: ["PowerBI"],
    github: "https://github.com/nandusaji2001/Blinkit-Sales-Dashboard-PowerBI",
    featured: true,
  },
]


  const internships = [
    {
      title: "React Intern",
      company: "Mystic Xyborgs",
      period: "Apr 2025",
      description:
        "Contributed to a banking application using React with features like authentication, money transfers, and role-based access.",
      icon: <Code className="h-5 w-5" />,
      location: "Pandalam",
    },
    {
      title: "Data Science Intern",
      company: "Luminar Technolab",
      period: "Dec 2023 – Jul 2024",
      description:
        "Worked on ML, Deep Learning, AI, and NLP projects. Gained experience with Python, SQL, PowerBI, and AWS Cloud deployment.",
      icon: <Zap className="h-5 w-5" />,
      location: "Kochi",
    },
  ]

  const skills = [
    "Python",
    "Machine Learning",
    "React",
    "Deep Learning",
    "Java",
    "C++",
    "MongoDB",
    "Git",
    "PowerBI",
    "SQL",
  ]

  return (
    <TooltipProvider>
      <div className="relative min-h-screen bg-black text-white overflow-hidden scroll-smooth">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-black/70 backdrop-blur-md border-b border-white/10 z-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-3">
              <Link href="#home" className="text-2xl font-bold text-white hover:opacity-90 transition">
                Nandu Saji
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-5 text-sm">
                {[
                  { href: "#home", label: "Home" },
                  { href: "#about", label: "About" },
                  { href: "#projects", label: "Projects" },
                  { href: "#experience", label: "Internships" },
                  { href: "#achievements", label: "Achievements" }, // 👈 Added here
                  { href: "#contact", label: "Contact" },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="relative text-white/80 hover:text-white transition"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-white"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
              </div>
              </div>

              {/* Mobile Menu Overlay */}
              {isMenuOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40 bg-black/60 md:hidden"
                    onClick={() => setIsMenuOpen(false)}
                  />
                  <div className="md:hidden fixed top-14 left-4 right-4 z-50 rounded-xl border border-white/10 bg-black/95 shadow-xl backdrop-blur">
                    <div className="flex flex-col p-3 space-y-1">
                      {[
                        { href: "#home", label: "Home" },
                        { href: "#about", label: "About" },
                        { href: "#projects", label: "Projects" },
                        { href: "#experience", label: "Internships" },
                        { href: "#achievements", label: "Achievements" }, // 👈 Added here
                        { href: "#contact", label: "Contact" },
                      ].map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="rounded-lg px-4 py-3 hover:bg-white/5 text-white/90"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              )}
              </nav>


        {/* Hero Section - tightened spacing, monochrome */}
        <section id="home" className="scroll-mt-24 pt-24 pb-12 px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-8 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/10 text-white text-sm font-medium mb-5 shadow-sm ring-1 ring-white/10">
                <Star className="h-4 w-4 mr-2" />
                Available for new projects
              </div>
              <h1 className="text-5xl sm:text-6xl font-bold mb-5 leading-tight">
                Hi, I'm <span className="text-white">Nandu Saji</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 mb-6 max-w-2xl mx-auto lg:mx-0">
                MCA student at Amal Jyothi College of Engineering with a background in BSc Nautical Science. Passionate about coding, machine learning, and full-stack development.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mb-6 justify-center lg:justify-start">
                <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-200 shadow-lg"
                asChild
              >
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <Eye className="h-5 w-5 mr-2" />
                  View Resume
                </a>
              </Button>
                <Button
                variant="outline"
                size="lg"
                asChild
                className="text-black"
                >
                <Link href="#contact">
                  Get In Touch
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>

              </div>
              <div className="flex justify-center lg:justify-start space-x-6">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link href="https://github.com/nandusaji2001" aria-label="GitHub">
                      <Github className="h-6 w-6 hover:text-white transition" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>GitHub</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link href="https://www.linkedin.com/in/nandu-saji" aria-label="LinkedIn">
                      <Linkedin className="h-6 w-6 hover:text-white transition" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>LinkedIn</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link href="mailto:nandusaji20012001@gmail.com" aria-label="Email">
                      <Mail className="h-6 w-6 hover:text-white transition" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>Email</TooltipContent>
                </Tooltip>
              </div>
            </div>

            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 mx-auto">
              <div className="relative rounded-full p-1 bg-white/10 shadow-2xl">
                <div className="rounded-full p-2 bg-black ring-1 ring-white/10">
                  <Image
                    src="/profile.jpg"
                    alt="Profile Photo"
                    width={320}
                    height={320}
                    className="rounded-full border-4 border-black shadow-xl"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section - monochrome, tighter spacing */}
        <section id="about" className="scroll-mt-24 py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10">
          <div className="max-w-6xl mx-auto text-center mb-8">
            <h2 className="text-4xl sm:text-5xl font-bold mb-3">About Me</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              I completed my BSc Nautical Science and later discovered my passion for coding and software development. Currently pursuing MCA, I specialize in Machine Learning, Data Analytics, and Full-Stack Development.
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="text-sm px-3 py-1.5 bg-white/5 border border-white/10 text-white"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section - monochrome, no glow, tighter spacing */}
        <section id="projects" className="scroll-mt-24 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center mb-8">
            <h2 className="text-4xl sm:text-5xl font-bold mb-3">Featured Projects</h2>
            <p className="text-gray-300">Some things I’ve built recently</p>
          </div>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="group relative">
                <Card className="relative flex flex-col h-full overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/80 shadow-md transition-transform duration-300 group-hover:-translate-y-0.5">

                  <div className="aspect-video relative overflow-hidden">
                    <Image src={project.image} alt={project.title} fill className="object-cover grayscale transition duration-500 group-hover:grayscale-0" />
                  
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
                  </div>
                  <CardHeader>
                    <CardTitle className="leading-tight">{project.title}</CardTitle>
                    <CardDescription className="text-gray-300">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="bg-black/40 border-white/15 text-white/90">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center space-x-4 mt-4">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Link
                          href={project.github}
                          aria-label="GitHub repo"
                          className="hover:text-white transition"
                          target="_blank"
                        >
                          <Github className="h-5 w-5 text-white hover:text-gray-300" />
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent>Source</TooltipContent>
                    </Tooltip>
                  </div>
                </CardContent>

                </Card>
              </div>
            ))}
          </div>
        </section>

        {/* Internships Section - monochrome timeline */}
        <section id="experience" className="scroll-mt-24 py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10">
          <div className="max-w-6xl mx-auto text-center mb-8">
            <h2 className="text-4xl sm:text-5xl font-bold mb-3">Internships</h2>
            <p className="text-gray-300">Highlights from my recent experience</p>
          </div>
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical timeline line */}
            <div aria-hidden className="absolute left-8 top-0 bottom-0 w-0.5 bg-white/10" />
            <div className="space-y-8">
              {internships.map((internship, index) => (
                <div key={index} className="relative pl-16">
                  {/* Timeline dot */}
                  <div className="absolute left-8 top-2 -translate-x-1.5 h-3 w-3 rounded-full bg-white ring-4 ring-black" />
                  <div className="bg-neutral-900 rounded-2xl p-6 shadow-lg border border-white/10">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-3">
                      <h3 className="text-2xl font-bold flex items-center gap-2">
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-white">
                          {internship.icon}
                        </span>
                        {internship.title}
                      </h3>
                      <span className="text-sm font-medium text-black bg-white px-3 py-1 rounded-full mt-2 lg:mt-0">
                        {internship.period}
                      </span>
                    </div>
                    <p className="text-lg font-semibold text-white mb-1">
                      {internship.company} – {internship.location}
                    </p>
                    <p className="text-white/80">{internship.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

                {/* Achievements Section - monochrome cards with certificate viewer */}
        <section
          id="achievements"
          className="scroll-mt-24 py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10"
        >
          <div className="max-w-6xl mx-auto text-center mb-8">
            <h2 className="text-4xl sm:text-5xl font-bold mb-3">Achievements</h2>
            <p className="text-gray-300">A few highlights from my journey</p>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
            {/* Director's Honours List */}
            <Card className="border border-white/10 bg-neutral-900 shadow-lg">
              <CardHeader>
                <CardTitle className="text-white">
                  Director's Honours List (S2)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80">
                  <span className="font-semibold">Rank 1 Performer</span> for obtaining SGPA of 9.05.
                </p>
                <a
                  href="/certificates/honours2.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-sm text-blue-400 hover:underline"
                >
                  View Certificate
                </a>
              </CardContent>
            </Card>

            {/* Honours List 2 */}
            <Card className="border border-white/10 bg-neutral-900 shadow-lg">
              <CardHeader>
                <CardTitle className="text-white">Director's Honours List(S1)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80">
                  <span className="font-semibold">Second Price</span> for obtaining SGPA of 8.84.
                </p>
                <a
                  href="/certificates/honours1.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-sm text-blue-400 hover:underline"
                >
                  View Certificate
                </a>
              </CardContent>
            </Card>

            {/* Student Membership of ISTE */}
            <Card className="border border-white/10 bg-neutral-900 shadow-lg">
              <CardHeader>
                <CardTitle className="text-white"> Student Membership of ISTE</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80">
                  <span className="font-semibold">Membership in Indian Society for Technical Education</span>
                </p>
              </CardContent>
            </Card>

            {/* mulearn*/}
            <Card className="border border-white/10 bg-neutral-900 shadow-lg">
              <CardHeader>
                <CardTitle className="text-white">Mulearn Community Member</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80">
                  <span className="font-semibold">Level 4 Member</span> with 2.1K+ Karma Points.
                </p>
                <a
                  href="https://app.mulearn.org/profile/nandusaji-1@mulearn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-sm text-blue-400 hover:underline"
                >
                  View Mulearn profile
                </a>
              </CardContent>
            </Card>

    
          </div>
        </section>



        {/* Contact Section - monochrome panel */}
        <section id="contact" className="scroll-mt-24 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center mb-8">
            <h2 className="text-4xl sm:text-5xl font-bold mb-3">Let's Work Together</h2>
            <p className="text-gray-300">Feel free to reach out for collaborations or just a friendly chat</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="rounded-3xl p-8 bg-neutral-900 text-white shadow-xl border border-white/10">
              <h3 className="text-2xl font-bold mb-6" >Get In Touch</h3>
              <div className="space-y-4 text-white/90">
                <div className="flex items-center gap-3"><Mail /> nandusaji20012001@gmail.com</div>
                <div className="flex items-center gap-3"><Phone /> +91 9744892806</div>
                <div className="flex items-center gap-3"><MapPin /> Idukki, Kattappana</div>
              </div>
            </div>
            <Card className="border border-white/10 bg-neutral-900 shadow-2xl">
              <CardHeader className="text-white"><CardTitle>Send Me a Message</CardTitle></CardHeader>
              <CardContent>
                <form
                  className="space-y-4"
                  action="https://formspree.io/f/mjkebogb"
                  method="POST"
                >
                  <Input
                    name="name"
                    placeholder="Your Name"
                    className="bg-black border-white/15 text-white placeholder:text-white/40"
                    required
                  />
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    className="bg-black border-white/15 text-white placeholder:text-white/40"
                    required
                  />
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    rows={5}
                    className="bg-black border-white/15 text-white placeholder:text-white/40"
                    required
                  />
                  <Button type="submit" className="w-full bg-white text-black hover:bg-gray-200">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="opacity-20" />

        {/* Footer */}
        <footer className="bg-black text-white py-10 text-center border-t border-white/10">
          <div className="text-2xl font-bold mb-2">Nandu Saji</div>
          <p className="text-white/50 mb-6">Do or Do Not. There is no Try</p>
          <div className="flex justify-center space-x-6">
            <Link href="https://github.com/nandusaji2001" aria-label="GitHub"><Github className="h-6 w-6 hover:text-white transition" /></Link>
            <Link href="https://www.linkedin.com/in/nandu-saji" aria-label="LinkedIn"><Linkedin className="h-6 w-6 hover:text-white transition" /></Link>
            <Link href="mailto:nandusaji20012001@gmail.com" aria-label="Email"><Mail className="h-6 w-6 hover:text-white transition" /></Link>
          </div>
        </footer>
      </div>
    </TooltipProvider>
  )
}
