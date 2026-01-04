import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { StorySection } from "@/components/StorySection";
import { ProductShowcase } from "@/components/ProductShowcase";
import { Footer } from "@/components/Footer";
import trainingImage from "@/assets/training-scene.jpg";
import communityImage from "@/assets/community-run.jpg";

const Index = () => {
  return (
    <main className="bg-background overflow-x-hidden scrollbar-hide">
      <Navbar />
      
      <HeroSection />

      <StorySection
        number="01"
        subtitle="The Beginning"
        title="BORN TO RUN"
        description="In a small garage in 1976, two dreamers with a vision started a revolution. With nothing but passion and a few prototypes, they set out to change how the world moves. From those humble beginnings, a legacy was born—one that would inspire millions to chase their dreams."
        backgroundImage={trainingImage}
        alignment="left"
      />

      <StorySection
        number="02"
        subtitle="The Journey"
        title="BREAKING BARRIERS"
        description="Every record broken, every finish line crossed, every obstacle overcome—these are the moments that define us. We don't just make products; we craft tools that help athletes transcend their limits and write their own stories of triumph."
        backgroundImage={communityImage}
        alignment="right"
      />

      <ProductShowcase />

      <StorySection
        number="03"
        subtitle="The Future"
        title="TOGETHER WE RISE"
        description="The journey continues with you. Join a global community of dreamers, doers, and boundary-breakers. Together, we're not just changing the game—we're redefining what's possible. This is more than a brand. This is a movement."
        backgroundImage={communityImage}
        alignment="center"
      />

      <Footer />
    </main>
  );
};

export default Index;
