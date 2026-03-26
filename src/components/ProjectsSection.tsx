import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 } };

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform with cart, payment integration, and admin dashboard built with React and Node.js.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "#",
    live: "#",
  },
  {
    title: "AI Chat Application",
    description: "Real-time chat application with AI-powered responses, user authentication, and message history.",
    tech: ["Next.js", "OpenAI", "PostgreSQL", "WebSocket"],
    github: "#",
    live: "#",
  },
  {
    title: "Task Management Tool",
    description: "A collaborative task management tool with drag-and-drop boards, real-time updates, and team features.",
    tech: ["React", "TypeScript", "Supabase", "Tailwind"],
    github: "#",
    live: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <motion.div {...fadeUp}>
          <p className="text-primary font-display text-sm tracking-widest uppercase mb-2">Projects</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12">
            Featured <span className="text-gradient">Work</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="card-glass rounded-xl p-6 flex flex-col group hover:border-primary/30 transition-colors"
            >
              <h3 className="font-display font-semibold text-foreground text-lg mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
              <p className="text-sm text-muted-foreground font-body mb-4 flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tech.map((t) => (
                  <span key={t} className="text-[11px] font-body text-primary bg-primary/10 px-2 py-0.5 rounded">{t}</span>
                ))}
              </div>
              <div className="flex gap-3">
                <a href={project.github} className="text-muted-foreground hover:text-primary transition-colors">
                  <Github size={18} />
                </a>
                <a href={project.live} className="text-muted-foreground hover:text-primary transition-colors">
                  <ExternalLink size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
