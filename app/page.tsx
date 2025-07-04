"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  Github,
  Mail,
  Phone,
  ExternalLink,
  Award,
  Code,
  Briefcase,
  GraduationCap,
  MapPin,
  Calendar,
  ChevronDown,
  Linkedin,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const skills = [
    { name: "Python", level: 95, color: "#3776ab" },
    { name: "JavaScript/TypeScript", level: 90, color: "#3178c6" },
    { name: "React/Next.js", level: 88, color: "#61dafb" },
    { name: "PyTorch/TensorFlow", level: 85, color: "#ee4c2c" },
    { name: "Node.js", level: 82, color: "#339933" },
    { name: "AWS/GCP", level: 80, color: "#ff9900" },
    { name: "Docker", level: 78, color: "#2496ed" },
    { name: "PostgreSQL", level: 75, color: "#336791" },
  ]

  const experiences = [
    {
      title: "Machine Learning Researcher",
      company: "University of Toronto",
      period: "Oct 2023 – Jun 2025",
      location: "Toronto, ON",
      highlights: [
        "Led LSTM/Transformer-based time-series prediction of rainfall and thunderstorms in PyTorch/Seaborn",
        "Developed real-time WebGL dashboards adopted by 50+ climate research groups",
        "Parallelized feature engineering pipeline using Python multiprocessing (35% speedup)",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Fullstack Developer Intern",
      company: "StudyDojo (YC F24)",
      period: "Jun 2024 – Sep 2024",
      location: "Remote",
      highlights: [
        "Pushed new frontend integrations in Next.js + TypeScript for 100,000+ users",
        "Integrated Supabase + PostgreSQL to manage student data",
        "Cleaned Math/Physics submissions for AI assistant training (Jojo)",
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Founding Backend Engineer",
      company: "decaf (a local startup)",
      period: "August 2024 – Present",
      location: "Toronto, ON",
      highlights: [
        "Built modular backend using Flask, GraphQL, and REST; containerized with Docker",
        "Led infra setup and automated deployment on GCP with Docker Compose",
        "Collaborated directly with co-founders to onboard first 150+ users in 8 weeks",
      ],
      color: "from-green-500 to-emerald-500",
    },
  ]

  const projects = [
    {
      title: "KeyMuse – AI Menubar Writing Assistant",
      description: "Native macOS app with dockless menubar UI and hotkey triggers for AI-powered writing assistance",
      tech: ["Flutter", "Dart", "SQLite", "OpenAI API"],
      highlights: [
        "Used OpenAI to rewrite in-progress sentences for clarity, tone, or creativity",
        "Integrated local database for prompt logging and sentence versioning",
        "Explored Dart FFI to prototype clipboard monitoring and native keyboard hooks",
      ],
      link: "#",
      color: "from-orange-500 to-red-500",
    },
    {
      title: "AI Study Tool",
      description: "Fullstack AI assistant that transforms study content into flashcards via MCQ generation",
      tech: ["PyTorch", "FastAPI", "LangChain", "TypeScript", "React", "Docker"],
      highlights: [
        "Packaged with React for cross-platform desktop use",
        "Built responsive UI with TypeScript",
        "Winner of Most Educational Hack Award at KTByte Hacks 2024",
      ],
      link: "#",
      color: "from-blue-500 to-purple-500",
    },
    {
      title: "Local Weather Prediction",
      description: "CNN + Transformer model for storm forecasting with 80,000+ records",
      tech: ["PyTorch", "AWS", "PySpark"],
      highlights: [
        "Achieved AUC 0.86 for storm forecasting accuracy",
        "Handled ETL and live inference via AWS Lambda, SageMaker, and S3",
      ],
      link: "#",
      color: "from-cyan-500 to-blue-500",
    },
  ]

  const awards = [
    {
      title: "USA Mathematical Olympiad Qualifier",
      date: "March 2025",
      description: "Ranked top 250 out of 30,000+ students worldwide on the AMC 12/AIME math competition series",
      icon: "🏆",
    },
    {
      title: "Canadian Computing Olympiad Bronze Medal",
      date: "June 2025",
      description: "Ranked top 20 worldwide in Canada's premier high school programming competition",
      icon: "🥉",
    },
    {
      title: "Citadel AMC 12 Certificate of Excellence",
      date: "November 2024",
      description: "Top female scorer in MAA Seaway Region on the 2024 AMC 12 B Competition",
      icon: "🎖️",
    },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setActiveSection(sectionId)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-r from-purple-300/10 to-pink-300/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          style={{ left: "10%", top: "20%" }}
        />
        <motion.div
          className="absolute w-80 h-80 bg-gradient-to-r from-blue-300/10 to-cyan-300/10 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          style={{ right: "10%", bottom: "20%" }}
        />
      </div>

      {/* Fixed Navigation */}
      <motion.nav
        className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-purple-100"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              Gloria Li
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {["home", "about", "experience", "projects", "skills", "awards", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize hover:text-purple-600 transition-colors ${
                    activeSection === section ? "text-purple-600 font-semibold" : "text-gray-600"
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <motion.div
            className={`${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                Software Engineer
              </span>
            </motion.h1>

            <motion.div
              className="space-y-4 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <p className="text-xl md:text-2xl text-gray-600 font-medium">University of Waterloo • Class of 2030</p>
              <p className="text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed">
                Passionate about AI/ML, full-stack development, and building impactful solutions. Currently researching
                time-series prediction and developing innovative applications.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-wrap justify-center gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <a
                href="mailto:gloriali8976@gmail.com"
                className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-gray-600 hover:text-purple-600 transition-all hover:scale-105 shadow-sm"
              >
                <Mail className="w-4 h-4" />
                gloriali8976@gmail.com
              </a>

              <a
                href="https://www.linkedin.com/in/gloria-l-955979285/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-gray-600 hover:text-purple-600 transition-all hover:scale-105 shadow-sm"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>

              <a
                href="https://github.com/an-apple-in-a-tree"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-gray-600 hover:text-purple-600 transition-all hover:scale-105 shadow-sm"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Button
                onClick={() => scrollToSection("projects")}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg"
              >
                View Projects
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
                className="px-8 py-4 border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white rounded-full font-semibold transition-all transform hover:scale-105"
              >
                Get in Touch
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-32 left-10 w-4 h-4 bg-purple-500 rounded-full opacity-60"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute top-40 right-20 w-6 h-6 bg-pink-500 rounded-full opacity-40"
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-3 h-3 bg-orange-500 rounded-full opacity-50"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, delay: 2 }}
        />

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <ChevronDown className="w-6 h-6 text-purple-600" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="w-6 h-6 text-purple-600" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">University of Waterloo</h3>
                  <p className="text-gray-600">Bachelor's of Engineering in Software Engineering</p>
                  <p className="text-sm text-gray-500">September 2025 – May 2030</p>
                </div>
              </div>

              <p className="text-lg text-gray-600 leading-relaxed">
                I'm a passionate software engineering student with a strong foundation in AI/ML and full-stack
                development. My experience spans from machine learning research to building scalable applications for
                thousands of users.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                When I'm not coding, you'll find me competing in mathematical olympiads, contributing to open-source
                projects, or exploring the latest developments in artificial intelligence.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Available for internships</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">Open to collaboration</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center relative overflow-hidden">
                <div className="w-64 h-64 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full flex items-center justify-center">
                  <div className="text-6xl">🚀</div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full animate-pulse"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              <Briefcase className="inline w-10 h-10 mr-3" />
              Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div>
          </motion.div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <CardTitle className={`text-xl bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
                          {exp.title}
                        </CardTitle>
                        <CardDescription className="text-lg font-medium text-gray-700 mt-1">
                          {exp.company}
                        </CardDescription>
                      </div>
                      <div className="text-right text-sm text-gray-500">
                        <div className="flex items-center gap-1 mb-1">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className={`w-2 h-2 bg-gradient-to-r ${exp.color} rounded-full mt-2 flex-shrink-0`} />
                          <span className="text-gray-600 leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              <Code className="inline w-10 h-10 mr-3" />
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm border-0 overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${project.color}`} />
                  <CardHeader>
                    <CardTitle className="text-lg text-gray-800 flex items-center gap-2">
                      {project.title}
                      <ExternalLink className="w-4 h-4 text-gray-400" />
                    </CardTitle>
                    <CardDescription className="text-gray-600 leading-relaxed">{project.description}</CardDescription>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-purple-100 text-purple-700 hover:bg-purple-200"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <div
                            className={`w-1.5 h-1.5 bg-gradient-to-r ${project.color} rounded-full mt-1.5 flex-shrink-0`}
                          />
                          <span className="text-gray-600">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="space-y-3"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-800">{skill.name}</span>
                  <span className="text-gray-600 font-medium">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <motion.div
                    className="h-3 rounded-full"
                    style={{ backgroundColor: skill.color }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section id="awards" className="py-20 bg-white/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              <Award className="inline w-10 h-10 mr-3" />
              Awards & Recognition
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div>
          </motion.div>

          <div className="space-y-6">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm border-0">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="text-3xl">{award.icon}</div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-xl text-purple-700">{award.title}</CardTitle>
                          <Badge variant="outline" className="text-orange-600 border-orange-600">
                            {award.date}
                          </Badge>
                        </div>
                        <CardDescription className="text-gray-600 mt-2 leading-relaxed">
                          {award.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Ready to bring innovative ideas to life? I'm always excited to work on challenging projects and
              collaborate with amazing teams.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.a
                href="mailto:gloriali8976@gmail.com"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Email
              </motion.a>
              <motion.a
                href="https://github.com/an-apple-in-a-tree"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white rounded-full font-semibold transition-all transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View GitHub
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-purple-100 text-center text-gray-600 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-center gap-6">
            <motion.a
              href="mailto:gloriali8976@gmail.com"
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="text-purple-600 hover:text-purple-700"
            >
              <Mail className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://github.com/an-apple-in-a-tree"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: -5 }}
              className="text-purple-600 hover:text-purple-700"
            >
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/gloria-l-955979285/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="text-purple-600 hover:text-purple-700"
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
          </div>
          <p>&copy; 2024 Gloria Li. Built with Next.js, TypeScript, and ❤️</p>
        </div>
      </footer>
    </div>
  )
}
