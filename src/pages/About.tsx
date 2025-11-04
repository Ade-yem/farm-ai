import { HeroSection } from "@/components/Hero";
import { Eye, Rocket, Globe2, Lightbulb, Sprout } from "lucide-react";

export default function About() {
  return (
    <div className="pt-24">
      {/* Header */}
      <HeroSection title="About FarmAI" tagline="
            Transforming agriculture through artificial intelligence, one farm
            at a time." />
      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-primary mb-8 text-center">
            Our Story
          </h2>
          <div className="space-y-6 text-lg text-muted leading-relaxed">
            <p>
              FarmAI was born from a simple observation: farmers around the
              world were struggling with limited access to expert agricultural
              knowledge, unreliable weather information, and unpredictable
              market prices. As the global population grows and climate change
              poses new challenges, we recognized the urgent need to democratize
              agricultural intelligence.
            </p>
            <p>
              Our team of agricultural experts, technologists, and business
              developers came together with a shared vision: to create an
              AI-powered platform that empowers every farmer, regardless of
              location or resources, to make data-driven decisions that lead to
              better yields, reduced waste, and improved livelihoods.
            </p>
            <p>
              Today, FarmAI serves thousands of farmers across multiple
              continents, helping them optimize their operations, reduce
              environmental impact, and build more resilient farming practices
              for future generations.
            </p>
          </div>
        </div>
      </section>

      {/* Vision and Mission */}
      <section className="py-20 bg-linear-to-b from-bg to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-10 shadow-card">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-primary mb-6">
                Our Vision
              </h3>
              <p className="text-lg text-muted leading-relaxed">
                To revolutionize global agriculture through AI-driven innovation
                — empowering farmers with intelligent tools, real-time insights,
                and sustainable solutions for a smarter and greener planet. We
                envision a world where every farmer has access to the knowledge
                and technology needed to thrive in the face of changing climates
                and growing populations.
              </p>
            </div>

            <div className="bg-white rounded-xl p-10 shadow-card">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Rocket className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-primary mb-6">
                Our Mission
              </h3>
              <p className="text-lg text-muted leading-relaxed">
                Our mission is to empower farmers worldwide with accessible
                technology that enhances crop yield, optimizes resources,
                predicts climate patterns, and connects them to markets —
                fostering food security, economic growth, and environmental
                balance. We're committed to making advanced agricultural
                intelligence available to everyone, everywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Accessibility",
                description:
                  "We believe that cutting-edge agricultural technology should be accessible to farmers everywhere, regardless of location, language, or economic status.",
                Icon: Globe2,
              },
              {
                title: "Innovation",
                description:
                  "We continuously innovate and adapt our solutions to meet the evolving needs of modern agriculture and address global food security challenges.",
                Icon: Lightbulb,
              },
              {
                title: "Sustainability",
                description:
                  "Environmental stewardship is at our core. We help farmers adopt practices that protect the planet while improving their livelihoods.",
                Icon: Sprout,
              },
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                    <value.Icon className="w-10 h-10 text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  {value.title}
                </h3>
                <p className="text-muted leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-20 bg-linear-to-b from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">
            Our Impact
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                number: "10,000+",
                label: "Active Farmers",
                color: "text-primary",
              },
              {
                number: "50+",
                label: "Crop Types Supported",
                color: "text-primary",
              },
              { number: "20+", label: "Languages", color: "text-secondary" },
              {
                number: "30%",
                label: "Average Yield Increase",
                color: "text-primary",
              },
            ].map((metric, index) => (
              <div key={index} className="text-center">
                <div className={`text-5xl font-bold ${metric.color} mb-2`}>
                  {metric.number}
                </div>
                <div className="text-muted font-medium">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-linear-to-r from-primary to-[#066026]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Join Us on This Journey
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Together, we can build a more sustainable and prosperous future for
            agriculture.
          </p>
          <a
            href="/contact"
            className="inline-block bg-secondary text-primary px-10 py-4 rounded-xl font-bold hover:bg-secondary/90 transition-all transform hover:scale-105"
          >
            Get In Touch
          </a>
        </div>
      </section>
    </div>
  );
}
