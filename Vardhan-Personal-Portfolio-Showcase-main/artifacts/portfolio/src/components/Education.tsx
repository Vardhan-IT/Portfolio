import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";

const educationData = [
  {
    degree: "B.Tech (ECM)",
    institution: "Vignan's Institute of Information Technology",
    period: "2024 – 2027",
    description: "Pursuing Bachelor of Technology in Electronics and Computer Engineering. Focusing on the intersection of hardware and software.",
  },
  {
    degree: "Diploma (CE)",
    institution: "Sai Ganapathi Polytechnic",
    period: "2021 – 2024",
    description: "Completed Diploma in Computer Engineering with strong foundational knowledge in programming, computer systems, and software development.",
  }
];

export function Education() {
  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3">
            <span className="text-primary font-mono text-2xl">03.</span> Education
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-transparent rounded-full"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative border-l-2 border-primary/30 ml-3 md:ml-6 space-y-12">
            {educationData.map((edu, idx) => (
              <motion.div 
                key={edu.degree}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="relative pl-8 md:pl-12"
              >
                {/* Timeline node */}
                <div className="absolute -left-[11px] top-1 h-5 w-5 rounded-full bg-background border-2 border-primary flex items-center justify-center shadow-[0_0_10px_rgba(6,182,212,0.5)]">
                  <div className="h-2 w-2 rounded-full bg-primary animate-pulse"></div>
                </div>

                <div className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-2xl backdrop-blur-sm hover:border-primary/50 transition-colors group relative overflow-hidden">
                  {/* Subtle background glow on hover */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4 relative z-10">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                        <GraduationCap className="h-6 w-6 text-primary" />
                        {edu.degree}
                      </h3>
                      <p className="text-lg text-muted-foreground mt-1">{edu.institution}</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-mono text-primary bg-primary/10 px-3 py-1.5 rounded-full w-fit">
                      <Calendar className="h-4 w-4" />
                      {edu.period}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed relative z-10">
                    {edu.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
