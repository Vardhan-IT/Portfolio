import { motion } from "framer-motion";
import { Zap, Code, Database, Trophy } from "lucide-react";

const achievements = [
  {
    title: "Continuous Learning",
    description: "Constantly upgrading skills with modern tools",
    icon: Zap,
    color: "text-yellow-400"
  },
  {
    title: "Data Analytics Enthusiast",
    description: "Transforming raw data into meaningful stories",
    icon: Database,
    color: "text-primary"
  },
  {
    title: "Web Development Projects",
    description: "Building responsive and interactive web applications",
    icon: Code,
    color: "text-secondary"
  },
  {
    title: "Innovation Hackathon",
    description: "Participant in SUSHACKS 2025",
    icon: Trophy,
    color: "text-orange-400"
  }
];

export function Achievements() {
  return (
    <section className="py-12 relative border-y border-white/5 bg-white/[0.02]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="mb-4 p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-300 relative">
                  {/* Glow */}
                  <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <Icon className={`h-8 w-8 ${item.color} relative z-10 group-hover:scale-110 transition-transform`} />
                </div>
                <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}