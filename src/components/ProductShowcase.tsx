import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ScrollReveal } from "./ScrollReveal";
import productImage from "@/assets/product-shoes.jpg";

export const ProductShowcase = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rotateY = useTransform(scrollYProgress, [0, 1], [-15, 15]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <section ref={ref} className="min-h-screen bg-secondary py-20 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Product Image */}
          <motion.div
            className="relative"
            style={{ rotateY, scale }}
          >
            <div className="relative">
              <img
                src={productImage}
                alt="Premium running shoes"
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="absolute -inset-4 bg-primary/20 rounded-2xl -z-10 blur-2xl" />
            </div>
          </motion.div>

          {/* Product Info */}
          <div className="space-y-8">
            <ScrollReveal direction="right">
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary">
                Innovation Meets Performance
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.1}>
              <h2 className="font-display text-5xl md:text-6xl text-foreground">
                ENGINEERED FOR
                <span className="text-gradient block">GREATNESS</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Crafted with precision, designed for champions. Our flagship 
                collection combines cutting-edge technology with unparalleled 
                comfort, pushing the boundaries of what's possible.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.3}>
              <div className="flex flex-wrap gap-4">
                <div className="bg-card px-6 py-4 rounded-xl">
                  <p className="text-3xl font-display text-primary">40%</p>
                  <p className="text-sm text-muted-foreground">Lighter</p>
                </div>
                <div className="bg-card px-6 py-4 rounded-xl">
                  <p className="text-3xl font-display text-primary">2X</p>
                  <p className="text-sm text-muted-foreground">More Energy Return</p>
                </div>
                <div className="bg-card px-6 py-4 rounded-xl">
                  <p className="text-3xl font-display text-primary">100%</p>
                  <p className="text-sm text-muted-foreground">Sustainable</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.4}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 rounded-full bg-primary px-10 py-4 font-semibold text-primary-foreground transition-all hover:glow-primary"
              >
                Shop Collection
              </motion.button>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
