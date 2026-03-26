import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = ["About", "Education", "Skills", "Experience", "Projects", "Achievements"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-border"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <button onClick={() => scrollTo("hero")} className="font-display text-xl font-bold text-foreground tracking-tight">
          Portfolio<span className="text-primary">.</span>
        </button>

        <div className="hidden md:flex gap-8">
          {links.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className="text-sm text-muted-foreground hover:text-primary transition-colors font-body"
            >
              {l}
            </button>
          ))}
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-card border-b border-border"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {links.map((l) => (
                <button key={l} onClick={() => scrollTo(l)} className="text-sm text-muted-foreground hover:text-primary text-left">
                  {l}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
