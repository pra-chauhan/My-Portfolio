import { motion } from "framer-motion";
import { Award, Trophy, Star, Medal } from "lucide-react";

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 } };

const achievements = [
  { icon: Trophy, title: "Hackathon Winner", description: "1st place at HACKINDIA Spark 9 Hackathon 2025" },
  { icon: Star, title: "1st Runner-Up", description: "2nd place at MANTHAN National Hackathon 2024" },
  { icon: Award, title: "Winner", description: "University Internal Hackathon 8.0 2026" },
  { icon: Medal, title: "Student Leader", description: "D-Coders Squad (University's Tech Club) - Application Development Group Team Lead" },
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="section-padding bg-card/30">
      <div className="max-w-5xl mx-auto">
        <motion.div {...fadeUp}>
          <p className="text-primary font-display text-sm tracking-widest uppercase mb-2">Achievements</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12">
            Notable <span className="text-gradient">Milestones</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-glass rounded-xl p-6 flex items-start gap-4 hover:border-primary/30 transition-colors group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <item.icon size={22} className="text-primary" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground font-body">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
