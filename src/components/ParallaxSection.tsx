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
          className="absolute inset-0 z-0 parallax-layer"
          style={{ y, scale: 1.2 }}
        >
          <img
            src={backgroundImage}
            alt=""
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover saturate-110 contrast-105"
          />
          {overlay && (
            <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/20 to-background/75" />
          )}
        </motion.div>
      )}

      <div className="relative z-10">{children}</div>
    </section>
  );
};
