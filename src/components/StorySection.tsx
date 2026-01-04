import { ParallaxSection } from "./ParallaxSection";
import { ScrollReveal } from "./ScrollReveal";

interface StorySectionProps {
  title: string;
  subtitle: string;
  description: string;
  backgroundImage: string;
  alignment?: "left" | "right" | "center";
  number?: string;
}

export const StorySection = ({
  title,
  subtitle,
  description,
  backgroundImage,
  alignment = "left",
  number,
}: StorySectionProps) => {
  const alignmentClasses = {
    left: "items-start text-left",
    right: "items-end text-right",
    center: "items-center text-center",
  };

  return (
    <ParallaxSection
      backgroundImage={backgroundImage}
      speed={0.3}
      className="min-h-screen flex items-center"
    >
      <div className="container mx-auto px-6 py-20">
        <div className={`flex flex-col ${alignmentClasses[alignment]} max-w-2xl ${alignment === "right" ? "ml-auto" : alignment === "center" ? "mx-auto" : ""}`}>
          {number && (
            <ScrollReveal direction={alignment === "right" ? "left" : "right"}>
              <span className="font-display text-8xl md:text-9xl text-primary/20 leading-none">
                {number}
              </span>
            </ScrollReveal>
          )}
          
          <ScrollReveal delay={0.1} direction={alignment === "right" ? "left" : "right"}>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary mb-4">
              {subtitle}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2} direction={alignment === "right" ? "left" : "right"}>
            <h2 className="font-display text-5xl md:text-7xl text-foreground story-text mb-6">
              {title}
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.3} direction={alignment === "right" ? "left" : "right"}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {description}
            </p>
          </ScrollReveal>
        </div>
      </div>
    </ParallaxSection>
  );
};
