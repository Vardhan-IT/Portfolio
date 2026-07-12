import { motion } from "framer-motion";
import { Award, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const certifications = [
  {
    title: "Python Essentials 1",
    issuer: "Cisco",
    date: "March 2025"
  },
  {
    title: "Python Essentials 2",
    issuer: "Cisco",
    date: "March 2025"
  },
  {
    title: "AI Tools & ChatGPT Workshop",
    issuer: "be10x",
    date: "March 2025"
  },
  {
    title: "Innovation Hackathon",
    issuer: "SUSHACKS 2025",
    date: "2025"
  }
];

export function Certifications() {
  return (
    <section id="certifications" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3">
            <span className="text-primary font-mono text-2xl">05.</span> Certifications
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-transparent rounded-full"></div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:border-primary/40 hover:bg-white/10 transition-all duration-300 h-full group overflow-hidden relative">
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-bl-full pointer-events-none group-hover:bg-primary/20 transition-colors"></div>
                <CardContent className="p-6 relative z-10 flex flex-col h-full">
                  <div className="mb-4">
                    <Award className="h-10 w-10 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2 leading-tight flex-grow">{cert.title}</h3>
                  <div className="mt-auto">
                    <p className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                      {cert.issuer}
                    </p>
                    <p className="text-xs font-mono text-primary/70 mt-2">{cert.date}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}