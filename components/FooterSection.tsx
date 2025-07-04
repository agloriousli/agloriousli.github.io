import { motion } from "framer-motion"
import { Mail, Github, Linkedin } from "lucide-react"

export default function FooterSection() {
  return (
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
        <p>&copy; 2025 Gloria Li. Built with Next.js, TypeScript, and ❤️</p>
      </div>
    </footer>
  )
} 