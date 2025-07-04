import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"
import { useState, useEffect } from "react"

interface NavbarProps {
  activeSection: string
  scrollToSection: (sectionId: string) => void
}

export default function Navbar({ activeSection, scrollToSection }: NavbarProps) {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])

  // Animated toggle handler
  const isDark = resolvedTheme === 'dark'

  return (
    <motion.nav
      className="fixed top-0 w-full z-50 bg-white/80 dark:bg-black/60 backdrop-blur-md border-b border-purple-100 dark:border-zinc-800"
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
            @agloriousli
          </motion.div>
          <div className="hidden md:flex space-x-8 items-center">
            {["home", "about", "experience", "projects", "skills", "awards", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize hover:text-purple-600 transition-colors ${
                  activeSection === section ? "text-purple-600 font-semibold" : "text-gray-600 dark:text-gray-300"
                }`}
              >
                {section}
              </button>
            ))}
            {/* Aesthetic theme toggle */}
            {mounted && (
              <button
                aria-label="Toggle theme"
                className="ml-6 p-2 rounded-full bg-gradient-to-tr from-purple-100/80 to-pink-100/80 dark:from-zinc-900 dark:to-zinc-800 shadow hover:scale-110 transition-all border border-white/30 dark:border-zinc-700"
                onClick={() => setTheme(isDark ? 'light' : 'dark')}
              >
                <motion.span
                  key={isDark ? 'moon' : 'sun'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="flex items-center justify-center"
                >
                  {isDark ? (
                    <Moon className="w-5 h-5 text-purple-500" />
                  ) : (
                    <Sun className="w-5 h-5 text-yellow-500" />
                  )}
                </motion.span>
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.nav>
  )
} 