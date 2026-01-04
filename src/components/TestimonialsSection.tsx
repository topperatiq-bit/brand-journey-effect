import { motion } from "framer-motion";
import { ScrollReveal } from "./ScrollReveal";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "When I lace up my Velocity shoes, I feel unstoppable. They've been with me through every marathon, every early morning run, every personal record.",
    author: "Sarah Chen",
    title: "Olympic Marathon Runner",
  },
  {
    quote: "The innovation in every pair is unmatched. These aren't just shoes—they're the culmination of decades of understanding what athletes truly need.",
    author: "Marcus Johnson",
    title: "Professional Track & Field",
  },
  {
    quote: "From the streets of my neighborhood to the world stage, Velocity has been my partner. They believe in athletes like me before the world does.",
    author: "Elena Rodriguez",
    title: "World Champion Sprinter",
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background relative">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <h2 className="font-display text-4xl md:text-5xl text-center text-foreground mb-4">
            ATHLETE <span className="text-gradient">VOICES</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
            Hear from the champions who push boundaries every day
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={testimonial.author} delay={index * 0.15}>
              <motion.div
                className="bg-card/50 border border-border/50 rounded-2xl p-8 h-full flex flex-col relative overflow-hidden group"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                {/* Quote icon */}
                <Quote className="h-10 w-10 text-primary/30 mb-4" />
                
                {/* Quote text */}
                <p className="text-foreground/90 text-lg leading-relaxed flex-grow mb-6">
                  "{testimonial.quote}"
                </p>
                
                {/* Author */}
                <div className="border-t border-border/50 pt-6">
                  <p className="font-display text-xl text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {testimonial.title}
                  </p>
                </div>

                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};