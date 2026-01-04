import { motion } from "framer-motion";
import { ScrollReveal } from "./ScrollReveal";

const stats = [
  { value: "50M+", label: "Athletes Worldwide" },
  { value: "195", label: "Countries" },
  { value: "48+", label: "Years of Innovation" },
  { value: "100%", label: "Passion" },
];

export const StatsSection = () => {
  return (
    <section className="py-24 md:py-32 bg-card/50 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <h2 className="font-display text-4xl md:text-5xl text-center text-foreground mb-16">
            OUR <span className="text-gradient">IMPACT</span>
          </h2>
        </ScrollReveal>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <ScrollReveal key={stat.label} delay={index * 0.1}>
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <span className="font-display text-4xl md:text-6xl lg:text-7xl text-gradient block">
                  {stat.value}
                </span>
                <span className="text-sm md:text-base text-muted-foreground uppercase tracking-widest mt-2 block">
                  {stat.label}
                </span>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};