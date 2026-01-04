import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxSectionProps {
  children: React.ReactNode;
  backgroundImage?: string;
  speed?: number;
  overlay?: boolean;
  className?: string;
}

export const ParallaxSection = ({
  children,
  backgroundImage,
  speed = 0.5,
  overlay = true,
  className = "",
}: ParallaxSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`]);

  return (
    <section ref={ref} className={`relative overflow-hidden ${className}`}>
      {backgroundImage && (
        <motion.div
          className="absolute inset-0 -z-10 parallax-layer"
          style={{ y, scale: 1.2 }}
        >
          <img
            src={backgroundImage}
            alt=""
            className="h-full w-full object-cover"
          />
        </motion.div>
      )}
      {overlay && backgroundImage && (
        <div className="absolute inset-0 -z-10 bg-background/60" />
      )}
      {children}
    </section>
  );
};
