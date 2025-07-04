import { motion } from "framer-motion"
import { GraduationCap } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white/30 dark:bg-black/60 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
              style={{
                filter: "drop-shadow(0 8px 16px rgba(139, 92, 246, 0.3))",
                textShadow: "0 4px 8px rgba(139, 92, 246, 0.2)",
              }}
            >
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
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">University of Waterloo</h3>
                <p className="text-gray-600 dark:text-gray-100">Bachelor's of Engineering in Software Engineering</p>
                <p className="text-sm text-gray-500 dark:text-gray-200">September 2025 – May 2030</p>
              </div>
            </div>

            <p className="text-lg text-gray-600 dark:text-gray-100 leading-relaxed">
              I like to build tools that help people live better lives, drawing inspiration from my experiences and local community.</p>

            <p className="text-lg text-gray-600 dark:text-gray-100 leading-relaxed">
              When I'm not coding, you'll find me competing in hackathons/STEM olympiads, contributing to open-source
              projects, or exploring the latest developments in artificial intelligence.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-100">Available for internships</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-100">Open to collaboration</span>
              </div>
            </div>
          </motion.div>

          <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50, rotateY: 15 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              style={{ transform: "translateZ(30px)" }}
            >
              <div
                className="w-80 h-80 mx-auto bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center relative overflow-hidden"
                style={{
                  filter: "drop-shadow(0 20px 40px rgba(139, 92, 246, 0.3))",
                  transform: "translateZ(40px) rotateX(10deg)",
                }}
              >
                <motion.div
                  className="w-64 h-64 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full flex items-center justify-center"
                  animate={{
                    rotateY: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                  style={{ transform: "translateZ(20px)" }}
                >
                  <div className="text-6xl">🔮</div>
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full animate-pulse"></div>
              </div>
            </motion.div>
        </div>
      </div>
    </section>
  )
} 