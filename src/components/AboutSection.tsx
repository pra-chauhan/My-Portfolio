import { motion } from "framer-motion";
import { User, MapPin, Mail, Calendar } from "lucide-react";

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 } };

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <motion.div {...fadeUp}>
          <p className="text-primary font-display text-sm tracking-widest uppercase mb-2">A little </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
          <span className="text-gradient">About Me</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.1 }} className="md:col-span-2">
            <div className="card-glass rounded-xl p-8">
              <p className="text-secondary-foreground leading-relaxed text-base font-body mb-4">
                I am a motivated and detail-oriented student currently pursuing my degree in Computer Science. With hands-on and  strong foundation in software development, I love building clean, functional, and user-centric applications.
              </p>
              <p className="text-muted-foreground leading-relaxed text-base font-body">
                Beyond coding, I enjoy participating in hackathons, contributing to open-source, and building impactful solutions for society. I believe in continuous learning and thrive in collaborative environments where I can grow both personally and professionally.
              </p>
            </div>
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.2 }}>
            <div className="card-glass rounded-xl p-8 space-y-5">
              {[
                { icon: User, label: "Name", value: "Pragya" },
                { icon: MapPin, label: "Location", value: "Haridwar, Uttarakhand" },
                { icon: Mail, label: "Email", value: "prachauhan12@gmail.com" },
                { icon: Mail, label: "Email", value: "cu24250118@coeruniversity.ac.in" },
                { icon: Calendar, label: "Status", value: "Open to Opportunities" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <item.icon size={18} className="text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground font-body">{item.label}</p>
                    <p className="text-sm text-foreground font-body font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
