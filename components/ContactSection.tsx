import { motion } from "framer-motion"

export default function ContactSection() {
  return (
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
  )
} 