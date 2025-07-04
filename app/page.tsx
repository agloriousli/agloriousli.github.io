"use client"

import { useState, useEffect } from "react"
import Navbar from "@/components/Navbar"
import HeroSection from "@/components/HeroSection"
import AboutSection from "@/components/AboutSection"
import ExperienceSection from "@/components/ExperienceSection"
import ProjectsSection from "@/components/ProjectsSection"
import SkillsSection from "@/components/SkillsSection"
import AwardsSection from "@/components/AwardsSection"
import ContactSection from "@/components/ContactSection"
import FooterSection from "@/components/FooterSection"

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

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
      link: "https://github.com/agloriousli/KeyMuse",
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
      link: "https://github.com/agloriousli/passion-to-learn-public",
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
      link: "https://github.com/agloriousli/storm-prediction",
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
    <>
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
      <HeroSection isVisible={isVisible} activeSection={activeSection} scrollToSection={scrollToSection} />
      <AboutSection />
      <ExperienceSection experiences={experiences} />
      <ProjectsSection projects={projects} />
      <SkillsSection skills={skills} />
      <AwardsSection awards={awards} />
      <ContactSection />
      <FooterSection />
    </>
  )
}
