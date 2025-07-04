import { motion } from "framer-motion"
import { Briefcase, Calendar, MapPin } from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

interface Experience {
  title: string
  company: string
  period: string
  location: string
  highlights: string[]
  color: string
}

export default function ExperienceSection({ experiences }: { experiences: Experience[] }) {
  return (
    <section id="experience" className="py-20" style={{ perspective: "1500px" }}>
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50, rotateX: -20 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ transform: "translateZ(30px)" }}
          >
            <h2
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
              style={{
                filter: "drop-shadow(0 8px 16px rgba(139, 92, 246, 0.3))",
                textShadow: "0 4px 8px rgba(139, 92, 246, 0.2)",
              }}
            >
              <Briefcase className="inline w-10 h-10" />
              Experience
            </h2>
            <div
              className="w-24 h-2 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"
              style={{
                filter: "drop-shadow(0 4px 8px rgba(139, 92, 246, 0.4))",
                transform: "translateZ(10px)",
              }}
            ></div>
          </motion.div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  rotateX: 2,
                  rotateY: 1,
                  scale: 1.02,
                  filter: "drop-shadow(0 20px 40px rgba(139, 92, 246, 0.2))",
                }}
                style={{ transform: "translateZ(20px)" }}
              >
                <Card
                  className="hover:shadow-2xl transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm overflow-hidden"
                  style={{
                    filter: "drop-shadow(0 10px 20px rgba(139, 92, 246, 0.1))",
                    transform: "translateZ(10px)",
                  }}
                >
                  <div
                    className={`h-2 bg-gradient-to-r ${exp.color}`}
                    style={{ filter: "drop-shadow(0 2px 4px rgba(139, 92, 246, 0.3))" }}
                  />
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <CardTitle
                          className={`text-xl bg-gradient-to-r ${exp.color} bg-clip-text text-transparent font-bold`}
                          style={{ filter: "drop-shadow(0 2px 4px rgba(139, 92, 246, 0.2))" }}
                        >
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
                          <div
                            className={`w-2 h-2 bg-gradient-to-r ${exp.color} rounded-full mt-2 flex-shrink-0`}
                            style={{ filter: "drop-shadow(0 2px 4px rgba(139, 92, 246, 0.3))" }}
                          />
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
  )
} 