import type React from "react";

interface HeroSectionProps {
  title: string;
  tagline: string;
}
export const HeroSection: React.FC<HeroSectionProps> = ({ title, tagline }) => {
  return (
    <section className="gradient-text min-h-[500px] flex items-center justify-center py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl font-bold mb-6">{title}</h1>
        <p className="text-xl text-white/90">{tagline}</p>
      </div>
    </section>
  );
};
