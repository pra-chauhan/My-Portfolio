import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 } };

const experiences = [
  {
    role: "Software Development Intern",
    company: "Company Name",
    period: "Jun 2024 – Aug 2024",
    points: [
      "Developed and maintained full-stack features using React and Node.js",
      "Collaborated with a team of 5 engineers in an Agile environment",
      "Improved API response times by 30% through query optimization",
    ],
  },
  {
    role: "Web Development Intern",
    company: "Company Name",
    period: "Jan 2024 – Mar 2024",
    points: [
      "Built responsive landing pages and dashboards for client projects",
      "Integrated third-party APIs for payment processing and analytics",
      "Wrote unit tests achieving 85% code coverage",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding bg-card/30">
      <div className="max-w-5xl mx-auto">
        <motion.div {...fadeUp}>
          <p className="text-primary font-display text-sm tracking-widest uppercase mb-2">Experience</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12">
            Internship <span className="text-gradient">Experience</span>
          </h2>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="card-glass rounded-xl p-8"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Briefcase size={18} className="text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-display font-semibold text-foreground text-lg">{exp.role}</h3>
                    <span className="text-xs text-primary font-display font-medium bg-primary/10 px-3 py-1 rounded-full">{exp.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground font-body">{exp.company}</p>
                </div>
              </div>
              <ul className="space-y-2 ml-14">
                {exp.points.map((point, j) => (
                  <li key={j} className="text-sm text-secondary-foreground font-body flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
