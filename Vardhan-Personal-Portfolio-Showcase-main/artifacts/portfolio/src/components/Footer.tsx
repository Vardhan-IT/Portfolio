import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="py-8 border-t border-white/10 bg-background relative z-10">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <a href="#home" className="text-2xl font-bold font-mono tracking-tighter text-primary inline-flex items-center gap-2 mb-4">
            <span className="text-foreground">&lt;</span>
            VK
            <span className="text-foreground">/&gt;</span>
          </a>
          <p className="text-sm text-muted-foreground font-mono">
            &copy; 2026 Vardhan Karri. All Rights Reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}