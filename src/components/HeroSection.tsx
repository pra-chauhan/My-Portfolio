import { motion } from "framer-motion";
import { ArrowDown, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center section-padding pt-32" style={{ background: "var(--gradient-hero)" }}>
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left - Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-primary font-display font-medium text-sm tracking-widest uppercase mb-4">Welcome to my portfolio</p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-foreground mb-6">
            Hi, I'm<br />
            <span className="text-gradient">Your Name</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-lg leading-relaxed font-body mb-8">
            A passionate student & aspiring developer building impactful solutions through code, creativity, and continuous learning.
          </p>
          <div className="flex gap-4 flex-wrap">
            <button
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-display font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              Explore My Work <ArrowDown size={16} />
            </button>
            <a href="#contact" className="inline-flex items-center gap-2 border border-border text-foreground font-display font-medium px-6 py-3 rounded-lg hover:border-primary hover:text-primary transition-colors">
              Get In Touch
            </a>
          </div>
        </motion.div>

        {/* Right - Video Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="relative"
        >
          <div className="card-glass rounded-2xl aspect-video flex flex-col items-center justify-center glow-accent overflow-hidden">
            <div className="w-16 h-16 rounded-full border-2 border-primary/40 flex items-center justify-center mb-4">
              <Play size={28} className="text-primary ml-1" />
            </div>
            <p className="text-muted-foreground font-body text-sm">AI Intro Video Coming Soon</p>
            <p className="text-muted-foreground/50 font-body text-xs mt-1">Add your video here</p>
          </div>
          {/* Decorative accent */}
          <div className="absolute -z-10 top-8 -right-8 w-40 h-40 rounded-full bg-primary/10 blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
