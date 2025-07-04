import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Github, Mail, Linkedin, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeroSectionProps {
  isVisible: boolean
  activeSection: string
  scrollToSection: (sectionId: string) => void
}

export default function HeroSection({ isVisible, activeSection, scrollToSection }: HeroSectionProps) {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  return (
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
              Gloria Li
            </span>
          </motion.h1>

          <motion.div
            className="space-y-4 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-xl md:text-2xl text-gray-600 font-medium">SE @ University of Waterloo • Class of 2030</p>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed">
              Welcome to my portfolio, it is currently under construction...
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
        className="absolute top-48 left-10 w-4 h-4 bg-purple-500 rounded-full opacity-60"
        animate={{ y: [0, 50, 0] }}
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
      />
      <motion.div
        className="absolute top-40 right-20 w-6 h-6 bg-pink-500 rounded-full opacity-40"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
      />
      <motion.div
        className="absolute bottom-70 left-40 w-3 h-3 bg-orange-500 rounded-full opacity-50"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, delay: 2 }}
      />
      <motion.div
        className="absolute top-32 left-40 w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-70"
        style={{
          filter: "drop-shadow(0 8px 16px rgba(139, 92, 246, 0.4))",
          transform: "translateZ(30px)",
        }}
        animate={{
          y: [0, -30, 0],
          rotateX: [0, 180, 360],
          rotateY: [0, 180, 360],
        }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
      />
      <motion.div
        className="absolute top-80 right-20 w-8 h-8 bg-gradient-to-br from-pink-500 to-orange-500 opacity-60"
        style={{
          clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
          filter: "drop-shadow(0 10px 20px rgba(236, 72, 153, 0.4))",
          transform: "translateZ(40px)",
        }}
        animate={{
          y: [0, -40, 0],
          rotateZ: [0, 180, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
      />

      <motion.div
        className="absolute top-40 right-200 w-8 h-8 bg-gradient-to-br from-pink-500 to-red-500 opacity-60"
        style={{
          clipPath: "polygon(50% 0%, 20% 100%, 100% 100%)",
          filter: "drop-shadow(0 10px 20px rgba(236, 72, 153, 0.4))",
          transform: "translateZ(40px)",
        }}
        animate={{
          y: [0, -40, 0],
          rotateZ: [0, -180, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
      />


      <motion.div
        className="absolute bottom-40 left-60 w-5 h-5 bg-gradient-to-br from-orange-500 to-red-500 rounded-full opacity-80"
        style={{
          filter: "drop-shadow(0 6px 12px rgba(245, 158, 11, 0.4))",
          transform: "translateZ(25px)",
        }}
        animate={{
          y: [0, -25, 0],
          rotateY: [0, 360],
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 3.5, repeat: Number.POSITIVE_INFINITY, delay: 2 }}
      />
      <motion.div
        className="absolute top-60 left-80 w-5 h-5 bg-orange-400 rounded-full opacity-50"
        animate={{ y: [0, 25, 0] }}
        transition={{ duration: 3.5, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
      />
      <motion.div
        className="absolute bottom-32 right-1/3 w-4 h-4 bg-purple-400 rounded-full opacity-40"
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 2.8, repeat: Number.POSITIVE_INFINITY, delay: 1.2 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-7 h-7 bg-purple-300 rounded-full opacity-30"
        animate={{ y: [0, 35, 0] }}
        transition={{ duration: 4.2, repeat: Number.POSITIVE_INFINITY, delay: 0.8 }}
      />
      <motion.div
        className="absolute bottom-24 right-10 w-3 h-3 bg-pink-400 rounded-full opacity-60"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2.2, repeat: Number.POSITIVE_INFINITY, delay: 1.5 }}
      />
      <motion.div
        className="absolute top-24 right-1/4 w-6 h-6 bg-pink-600 rounded-full opacity-50"
        animate={{ y: [0, -22, 0] }}
        transition={{ duration: 3.7, repeat: Number.POSITIVE_INFINITY, delay: 0.3 }}
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
  )
} 