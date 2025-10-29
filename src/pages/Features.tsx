import FeatureCard from "@/components/FeatureCard";
import {features} from "@/config/features";
import { Check } from "lucide-react";

export default function Features() {
  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="bg-linear-to-br from-primary to-[#066026] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Comprehensive Farm Management Features
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Powerful AI-driven tools designed to help you make informed
            decisions, optimize resources, and maximize your farm's potential.
          </p>
        </div>
      </section>

      {/* Features by Category */}
      {features.sections.map((section, sectionIndex) => (
        <section
          key={sectionIndex}
          className={`py-20 ${
            sectionIndex % 2 === 0
              ? "bg-white"
              : "bg-linear-to-b from-bg to-white"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">
                {section.category}
              </h2>
              <div className="w-24 h-1 bg-secondary mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {section.features.map((feature, featureIndex) => (
                <FeatureCard
                  key={featureIndex}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  benefits={feature.benefits}
                />
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Additional Features Highlight */}
      <section className="py-20 bg-linear-to-b from-primary to-[#066026]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-6">
                More Than Just Features
              </h2>
              <p className="text-lg text-white/90 mb-6">
                FarmAI is a complete farming ecosystem that grows with you. From
                crop planning to harvest and market sales, we've got you
                covered.
              </p>
              <ul className="space-y-4">
                {[
                  "Offline-first design for rural areas",
                  "Voice commands in multiple languages",
                  "Community-driven knowledge sharing",
                  "Regular updates with new features",
                  "Expert agricultural support team",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="text-secondary mr-3 w-5 h-5 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-linear-to-b from-bg to-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Start Using FarmAI Today
          </h2>
          <p className="text-lg text-muted mb-8">
            All these features and more are available to help you succeed. Get
            started now and transform your farming journey.
          </p>
          <a
            href="#contact"
            className="inline-block bg-primary text-white px-10 py-4 rounded-xl font-bold hover:bg-primary/90 transition-colors"
          >
            Get Started Free
          </a>
        </div>
      </section>
    </div>
  );
}
