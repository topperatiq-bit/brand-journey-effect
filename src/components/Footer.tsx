import { motion } from "framer-motion";
import { ScrollReveal } from "./ScrollReveal";

export const Footer = () => {
  return (
    <footer className="bg-card py-20">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-6xl text-foreground mb-4">
              JOIN THE MOVEMENT
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Be part of a community that never stops pushing forward.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full bg-primary px-10 py-4 font-semibold text-primary-foreground transition-all hover:glow-primary"
            >
              Get Started
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full border border-border px-10 py-4 font-semibold text-foreground transition-all hover:bg-secondary"
            >
              Learn More
            </motion.button>
          </div>
        </ScrollReveal>

        <div className="border-t border-border pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="font-display text-2xl text-foreground">VELOCITY</p>
            <nav className="flex flex-wrap justify-center gap-8">
              {["Shop", "Athletes", "Stories", "About", "Contact"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>
            <p className="text-sm text-muted-foreground">
              © 2026 Velocity. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
