import { motion } from "framer-motion";
import { Download, Mail, MapPin, Github, Linkedin, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] opacity-50 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <motion.div 
            className="flex flex-col gap-6"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={item} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 w-fit backdrop-blur-sm">
              <MapPin className="h-4 w-4 text-primary" />
              <span className="text-sm text-muted-foreground font-medium">Visakhapatnam, Andhra Pradesh, India</span>
            </motion.div>

            <motion.div variants={item}>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-2">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">
                  Vardhan
                </span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  Karri
                </span>
              </h1>
            </motion.div>

            <motion.div variants={item}>
              <h2 className="text-xl md:text-2xl font-mono text-muted-foreground font-semibold flex items-center gap-2">
                <span className="text-primary">&gt;</span>
                <span className="typing-effect">Engineering Student | Technology Enthusiast | Lifelong Learner</span>
              </h2>
            </motion.div>

            <motion.p variants={item} className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Currently pursuing a B.Tech in Electronics and Computer Engineering. Passionate about building innovative projects, exploring emerging technologies, and developing solutions that create real-world impact.
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap items-center gap-4 pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all hover:shadow-[0_0_30px_rgba(6,182,212,0.6)]" data-testid="button-download-resume" asChild>
                <a href="/Vardhan_Karri_Resume.pdf" download="Vardhan_Karri_Resume.pdf">
                  <Download className="mr-2 h-5 w-5" /> Download Resume
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-primary/50 text-foreground hover:bg-primary/10 hover:text-primary transition-colors" asChild data-testid="button-contact-me">
                <a href="#contact">
                  <Mail className="mr-2 h-5 w-5" /> Contact Me
                </a>
              </Button>
            </motion.div>

            <motion.div variants={item} className="flex items-center gap-4 pt-4">
              <a href="https://github.com/Vardhan-IT" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-primary/20 hover:border-primary/50 text-muted-foreground hover:text-primary transition-all duration-300" data-testid="link-social-github">
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/vardhan-karri-9243302a7/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-primary/20 hover:border-primary/50 text-muted-foreground hover:text-primary transition-all duration-300" data-testid="link-social-linkedin">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </motion.div>
          </motion.div>

          <motion.div 
            className="hidden lg:flex justify-center relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, type: "spring", stiffness: 100 }}
          >
            {/* Abstract Tech Visualization / Avatar Placeholder */}
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Outer rotating rings */}
              <div className="absolute inset-0 rounded-full border border-primary/30 animate-[spin_10s_linear_infinite]"></div>
              <div className="absolute inset-4 rounded-full border border-secondary/30 animate-[spin_15s_linear_infinite_reverse]"></div>
              <div className="absolute inset-8 rounded-full border border-dashed border-primary/50 animate-[spin_20s_linear_infinite]"></div>
              
              {/* Core */}
              <div className="absolute inset-12 rounded-full bg-gradient-to-tr from-card to-background border border-white/10 backdrop-blur-md shadow-[0_0_50px_rgba(6,182,212,0.2)] flex items-center justify-center overflow-hidden">
                <div className="w-full h-full bg-gradient-to-b from-transparent to-primary/10 flex items-center justify-center">
                  <span className="text-6xl font-mono font-bold text-primary/40 tracking-tighter select-none">VK</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: "reverse" }}
      >
        <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
          <ChevronDown className="h-8 w-8" />
        </a>
      </motion.div>
    </section>
  );
}