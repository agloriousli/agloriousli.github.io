import { motion } from "framer-motion"

interface NavbarProps {
  activeSection: string
  scrollToSection: (sectionId: string) => void
}

export default function Navbar({ activeSection, scrollToSection }: NavbarProps) {
  return (
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
  )
} 