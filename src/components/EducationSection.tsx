import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 } };

const education = [
  {
    degree: "B.Tech in Computer Science",
    school: "COER University",
    period: "2024 – 2028",
    grade: "CGPA: 8.8 / 10",
    details: "Relevant coursework: Data Structures, Algorithms, DBMS, Web Development, AIML",
  },
  {
    degree: "Higher Secondary (XII) & Secondary (X) Education",
    school: "Maa Saraswati Public School",
    period: "2023-2024 & 2021-2022",
    details: "Science stream with Mathematics ",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="section-padding bg-card/30">
      <div className="max-w-5xl mx-auto">
        <motion.div {...fadeUp}>
          <p className="text-primary font-display text-sm tracking-widest uppercase mb-2">Education</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12">
            Academic <span className="text-gradient">Journey</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border hidden md:block" />

          <div className="space-y-8">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="flex gap-6"
              >
                <div className="hidden md:flex shrink-0 w-10 h-10 rounded-full bg-secondary items-center justify-center border border-border relative z-10">
                  <GraduationCap size={18} className="text-primary" />
                </div>
                <div className="card-glass rounded-xl p-6 flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="font-display font-semibold text-foreground text-lg">{edu.degree}</h3>
                    <span className="text-xs text-primary font-display font-medium bg-primary/10 px-3 py-1 rounded-full">{edu.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground font-body mb-1">{edu.school}</p>
                  <p className="text-sm text-primary/80 font-body font-medium">{edu.grade}</p>
                  {edu.details && <p className="text-sm text-muted-foreground font-body mt-2">{edu.details}</p>}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
