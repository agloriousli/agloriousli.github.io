import { motion } from "framer-motion"
import { Mail, Github, Linkedin } from "lucide-react"

export default function FooterSection() {
  return (
    <footer
        className="py-12 border-t border-purple-100 text-center text-gray-600 bg-white/60 backdrop-blur-sm"
        style={{ perspective: "1000px" }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <motion.div className="flex justify-center gap-8 mb-6" style={{ transform: "translateZ(20px)" }}>
            {[
              { href: "mailto:gloriali8976@gmail.com", icon: Mail, color: "text-purple-600" },
              { href: "https://github.com/an-apple-in-a-tree", icon: Github, color: "text-gray-700" },
              { href: "https://www.linkedin.com/in/gloria-l-955979285/", icon: Linkedin, color: "text-blue-600" },
            ].map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`${link.color} hover:scale-110 transition-all duration-300`}
                style={{
                  filter: "drop-shadow(0 4px 8px rgba(139, 92, 246, 0.2))",
                  transform: "translateZ(10px)",
                }}
                whileHover={{
                  scale: 1.2,
                  rotateY: 15,
                  filter: "drop-shadow(0 6px 12px rgba(139, 92, 246, 0.3))",
                }}
                whileTap={{ scale: 0.9 }}
              >
                <link.icon className="w-7 h-7" />
              </motion.a>
            ))}
          </motion.div>
          <motion.p
            style={{
              filter: "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))",
              transform: "translateZ(5px)",
            }}
            whileHover={{ scale: 1.02 }}
          >
            &copy; 2025 Gloria Li. Built with Next.js, TypeScript, and ❤️
          </motion.p>
        </div>
      </footer>
  )
} 