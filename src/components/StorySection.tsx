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
      <div className="container mx-auto px-6 py-20 md:py-28">
        <div
          className={`relative flex flex-col ${alignmentClasses[alignment]} max-w-2xl pt-14 md:pt-16 ${
            alignment === "right" ? "ml-auto" : alignment === "center" ? "mx-auto" : ""
          }`}
        >
          {number && (
            <ScrollReveal direction={alignment === "right" ? "left" : "right"}>
              <span
                className={`pointer-events-none absolute -top-10 md:-top-14 font-display text-8xl md:text-9xl text-primary/20 leading-none ${
                  alignment === "right"
                    ? "right-0"
                    : alignment === "center"
                      ? "left-1/2 -translate-x-1/2"
                      : "left-0"
                }`}
                aria-hidden="true"
              >
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
            <p className="text-base md:text-lg text-foreground/75 leading-relaxed story-text">
              {description}
            </p>
          </ScrollReveal>
        </div>
      </div>
    </ParallaxSection>
  );
};
