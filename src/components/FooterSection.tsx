import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 } };

const socials = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Mail, href: "mailto:prachauhan12@gmail.com", label: "Email" },
];

const FooterSection = () => {
  return (
    <footer id="contact" className="section-padding border-t border-border">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div {...fadeUp}>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground font-body mb-8 max-w-md mx-auto">
            I'm always open to new opportunities and interesting conversations. Feel free to reach out!
          </p>

          <div className="flex justify-center gap-4 mb-12">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="w-12 h-12 rounded-lg bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
              >
                <s.icon size={20} />
              </a>
            ))}
          </div>

          <p className="text-xs text-muted-foreground font-body">
            © {new Date().getFullYear()} Pragya Chauhan. Built with passion.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterSection;
