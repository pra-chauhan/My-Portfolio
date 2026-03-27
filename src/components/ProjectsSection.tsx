import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 } };

const projects = [
  {
    title: "DocuSynth AI",
    description: "AI-Powered Legal Document Summarizer, an advanced tool designed to streamline the analysis of complex legal documents. Key Features - text extraction, clause detection, multilingual translation, summarization and named entity recognition",
    tech: ["Python", "OpenAI", "RAG", "Streamlit", "LangChain", "VectorDB"],
    github: "https://github.com/pra-chauhan/DocuSynthAI.git",
    // live: "#",
  },
  {
    title: "AI Crop Recommendation System",
    description: "AI-powered crop recommendation system that provides personalized suggestions based on soil conditions, weather data, and historical yields.",
    tech: ["Python", "React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/pra-chauhan/Ai-crop.git",
    // live: "#",
  },
  {
    title: "HerPulseAI",
    description: "A health and wellness app designed specifically for PCOS/PCOD patients, offering personalized insights, symptom tracking, and lifestyle recommendations to manage their condition effectively.",
    tech: ["Machine Learning", "Random Forest", "XGboost", "Logistic Regression", "Python", "FASTAPI", "Streamlit"],
    github: "https://github.com/pra-chauhan/HerPulseAI.git",
    // live: "#",
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
                {/* <a href={project.live} className="text-muted-foreground hover:text-primary transition-colors">
                  <ExternalLink size={18} />
                </a> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
