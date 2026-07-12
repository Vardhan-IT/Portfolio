import { motion } from "framer-motion";
import { Github, ExternalLink, Folder } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Heart Disease Data Analysis",
    description: "Performed data cleaning, exploratory data analysis, visualization, and insight generation to understand the factors contributing to heart disease.",
    tags: ["Python", "Pandas", "NumPy", "Matplotlib"],
    links: {
      github: "https://github.com/Vardhan-IT",
    }
  },
  {
    title: "Personal Portfolio Website",
    description: "Fully responsive personal portfolio website built to showcase my skills, projects, and educational background with a modern dark theme.",
    tags: ["HTML", "CSS", "JavaScript"],
    links: {
      github: "https://github.com/Vardhan-IT",
      live: "https://vardhan-it.github.io/VARDHAN-INFORMATION_WORLD/"
    }
  },
  {
    title: "Eventica Website",
    description: "Modern event management website with clean UI and responsive design, aimed at making event discovery and booking seamless.",
    tags: ["HTML", "CSS", "JavaScript"],
    links: {
      github: "https://github.com/Vardhan-IT",
      live: "https://vardhan-it.github.io/eventica-1/"
    }
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3">
            <span className="text-primary font-mono text-2xl">04.</span> Featured Projects
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-transparent rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group h-full"
            >
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm h-full flex flex-col hover:border-primary/50 transition-all duration-300 relative overflow-hidden">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Folder className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex gap-3">
                      {project.links.github && (
                        <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" data-testid={`link-project-github-${idx}`}>
                          <Github className="h-5 w-5" />
                        </a>
                      )}
                      {project.links.live && (
                        <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" data-testid={`link-project-live-${idx}`}>
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </CardContent>
                
                <CardFooter className="pt-4 flex flex-col items-start gap-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs font-mono text-primary/80 bg-primary/10 px-2 py-1 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3 w-full mt-2">
                    {project.links.github && (
                      <Button variant="outline" size="sm" className="w-full border-white/10 hover:border-primary hover:bg-primary/10 hover:text-primary" asChild>
                        <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" /> GitHub
                        </a>
                      </Button>
                    )}
                    {project.links.live && (
                      <Button size="sm" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                        <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}