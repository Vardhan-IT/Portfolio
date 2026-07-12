import { motion } from "framer-motion";
import { Terminal, BrainCircuit, Activity } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3">
            <span className="text-primary font-mono text-2xl">01.</span> About Me
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-transparent rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am a B.Tech ECM student at Vignan&apos;s Institute of Information Technology aspiring to become a <strong className="text-foreground">Data Analyst</strong>. I&apos;m skilled in Python, SQL, Excel, Power BI, and various data analysis libraries like Pandas, NumPy, Matplotlib, and Seaborn.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am passionate about <strong className="text-foreground">data cleaning, exploratory data analysis, and data visualization</strong>. I also leverage AI tools and prompt engineering to improve productivity and solve real-world problems. My goal is to drive informed decision-making through data-driven insights.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:border-primary/50 transition-colors group">
              <CardContent className="p-6 flex flex-col gap-4">
                <div className="p-3 bg-primary/10 w-fit rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Terminal className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-2xl text-foreground mb-1">3+ Projects</h3>
                  <p className="text-sm text-muted-foreground font-mono">Web & Data</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:border-secondary/50 transition-colors group">
              <CardContent className="p-6 flex flex-col gap-4">
                <div className="p-3 bg-secondary/10 w-fit rounded-lg group-hover:bg-secondary/20 transition-colors">
                  <BrainCircuit className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-bold text-2xl text-foreground mb-1">2 Certifications</h3>
                  <p className="text-sm text-muted-foreground font-mono">Continuous Learning</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:border-primary/50 transition-colors group sm:col-span-2">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Activity className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-foreground">Data Analytics Enthusiast</h3>
                  <p className="text-sm text-muted-foreground mt-1">Transforming raw data into meaningful stories.</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
