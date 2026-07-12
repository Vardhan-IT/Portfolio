import { motion } from "framer-motion";
import { SiPython, SiSqlite, SiHtml5, SiJavascript, SiGithub } from "react-icons/si";
import { BarChart2, FileSpreadsheet, TrendingUp, Code2, Terminal } from "lucide-react";

type SkillIconType = React.ComponentType<{ className?: string; style?: React.CSSProperties }>;

const skillCategories = [
  {
    title: "Programming & Data Analytics",
    skills: [
      { name: "Python", icon: SiPython as SkillIconType, color: "#3776AB" },
      { name: "SQL", icon: SiSqlite as SkillIconType, color: "#00758F" },
      { name: "Excel", icon: FileSpreadsheet as SkillIconType, color: "#217346" },
      { name: "Power BI", icon: BarChart2 as SkillIconType, color: "#F2C811" },
      { name: "Pandas", icon: Code2 as SkillIconType, color: "#150458" },
      { name: "NumPy", icon: Code2 as SkillIconType, color: "#013243" },
      { name: "Matplotlib", icon: TrendingUp as SkillIconType, color: "#11557c" },
      { name: "Seaborn", icon: TrendingUp as SkillIconType, color: "#4C72B0" },
    ]
  },
  {
    title: "Web Development",
    skills: [
      { name: "HTML5", icon: SiHtml5 as SkillIconType, color: "#E34F26" },
      { name: "CSS3", icon: Code2 as SkillIconType, color: "#1572B6" },
      { name: "JavaScript", icon: SiJavascript as SkillIconType, color: "#F7DF1E" },
    ]
  },
  {
    title: "Tools",
    skills: [
      { name: "GitHub", icon: SiGithub as SkillIconType, color: "#ffffff" },
      { name: "VS Code", icon: Terminal as SkillIconType, color: "#007ACC" },
    ]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3">
            <span className="text-primary font-mono text-2xl">02.</span> Technical Skills
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-transparent rounded-full"></div>
        </motion.div>

        <div className="flex flex-col gap-12">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-6 text-foreground/80 font-mono flex items-center gap-2">
                <span className="text-primary/50">#</span> {category.title}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {category.skills.map((skill, sIdx) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      data-testid={`skill-card-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
                      whileHover={{ y: -5, scale: 1.02 }}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: (idx * 0.1) + (sIdx * 0.05) }}
                      className="group relative bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col items-center justify-center gap-3 overflow-hidden backdrop-blur-sm"
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                      <div className="relative z-10 p-3 bg-white/5 rounded-full group-hover:bg-white/10 transition-colors">
                        <Icon className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" style={{ color: skill.color }} />
                      </div>
                      <span className="relative z-10 font-medium text-sm text-muted-foreground group-hover:text-foreground transition-colors text-center">{skill.name}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
