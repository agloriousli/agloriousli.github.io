import { motion } from "framer-motion"
import { Award } from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface AwardType {
  title: string
  date: string
  description: string
  icon: string
}

export default function AwardsSection({ awards }: { awards: AwardType[] }) {
  return (
    <section id="awards" className="py-20 bg-white dark:bg-black backdrop-blur-sm">
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
            Awards & Competitions
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
  )
} 