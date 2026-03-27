import { motion } from "framer-motion";

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 } };

const skillCategories = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "Java", "C++"],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "HTML/CSS"],
  },
  {
    title: "Backend & DB",
    skills: ["Node.js", "Express", "MySQL", "MongoDB", "REST APIs", "FastAPI"],
  },
  {
    title: "Tools & Others",
    skills: ["Git", "Figma", "VS Code", "Android Studio", "C-Lion", "IntelliJ IDEA"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <motion.div {...fadeUp}>
          <p className="text-primary font-display text-sm tracking-widest uppercase mb-2">Skills</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12">
            My <span className="text-gradient">Tech Stack</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-glass rounded-xl p-6"
            >
              <h3 className="font-display font-semibold text-foreground text-sm mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-body text-secondary-foreground bg-secondary px-3 py-1.5 rounded-md border border-border hover:border-primary/40 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
