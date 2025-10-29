import { Link } from "react-router-dom";
// import ProductMockup from "@/components/ProductMockup";
import FeatureCard from "@/components/FeatureCard";
import TestimonialCard from "@/components/TestimonialCard";
import testimonials from "@/config/testimonials.json";
import { features } from "@/config/features";
import {
  Sparkles,
  Globe,
  Users,
  Wheat,
  Target,
  MessageCircle,
  Eye,
  Rocket,
  Smartphone,
  Crop,
  Bot,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

export default function Home() {
  // Get top 3 features for the home page
  const topFeatures = features.sections[0].features.slice(0, 3);
  const topTestimonials = testimonials.testimonials.slice(0, 3);

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center bg-linear-to-br from-green-50 via-white to-bg py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full font-medium text-sm mb-4">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                Trusted by 10,000+ farmers worldwide
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold text-primary mb-6 leading-tight">
                Empowering the hands that
                <span className="block bg-linear-to-r from-primary to-[#0d9a42] bg-clip-text text-transparent">
                  feed the world
                </span>
              </h1>

              <p className="text-xl text-muted mb-4 leading-relaxed">
                FarmAI is an AI-powered, multilingual farming companion that
                helps farmers solve crop problems using voice, text, or images.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-lg font-semibold text-primary">
                <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                  <Sparkles className="w-5 h-5" />
                  <span>Works completely offline</span>
                </div>
                <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                  <Globe className="w-5 h-5" />
                  <span>Supports 50+ languages</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  to="/features"
                  className="bg-primary text-white px-10 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl text-center group"
                >
                  Get Started Free
                  <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="#features"
                  className="border-2 border-primary/30 text-primary px-10 py-4 rounded-xl font-semibold hover:bg-primary/5 hover:border-primary transition-all transform hover:scale-105 text-center"
                >
                  Watch Demo
                </a>
              </div>
            </div>

            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -top-8 -right-8 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>

              <div className="relative bg-linear-to-br from-primary/10 to-secondary/20 rounded-3xl p-8 transform hover:scale-105 transition-transform duration-500">
                <img
                  src="/hero.png"
                  alt="FarmAI Mobile App Interface"
                  className="w-full h-auto object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "10K+", label: "Active Farmers", Icon: Users },
              { number: "50+", label: "Crop Types", Icon: Wheat },
              { number: "95%", label: "Accuracy Rate", Icon: Target },
              { number: "24/7", label: "Support", Icon: MessageCircle },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-3">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <stat.Icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <div className="text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-linear-to-b from-bg to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">
              About FarmAI
            </h2>
            <p className="text-lg text-muted max-w-3xl mx-auto">
              FarmAI is an eco-tech initiative designed to revolutionize
              agriculture through artificial intelligence. We empower farmers
              with real-time insights, AI-powered recommendations, and
              community-driven support to help them grow smarter and more
              sustainably.
            </p>
          </div>

          <div className="grid md:grid-cols-2 mp-8">
            <div className="bg-white rounded-xl p-8 shadow-card mb-6 md:mb-0 md:mr-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                Our Vision
              </h3>
              <p className="text-muted leading-relaxed">
                To revolutionize global agriculture through AI-driven innovation
                — empowering farmers with intelligent tools, real-time insights,
                and sustainable solutions for a smarter and greener planet.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-card md:ml-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Rocket className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                Our Mission
              </h3>
              <p className="text-muted leading-relaxed">
                Our mission is to empower farmers worldwide with accessible
                technology that enhances crop yield, optimizes resources,
                predicts climate patterns, and connects them to markets —
                fostering food security, economic growth, and environmental
                balance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Key Features
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Everything you need to manage your farm efficiently and grow
              better crops
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topFeatures.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                benefits={feature.benefits.slice(0, 2)}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/features"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-primary/90 transition-colors"
            >
              View All Features
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-linear-to-b from-bg to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted">
              Get started in three simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                Icon: Smartphone,
                title: "Download & Set Up",
                description:
                  "Download FarmAI from your app store and create your free account in minutes.",
              },
              {
                step: "2",
                Icon: Crop,
                title: "Add Your Farm",
                description:
                  "Enter your location, soil type, and crop details to get personalized recommendations.",
              },
              {
                step: "3",
                Icon: Bot,
                title: "Get AI Insights",
                description:
                  "Start receiving AI-powered advice on crops, weather, and market prices instantly.",
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-xl p-8 shadow-card text-center">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                    {item.step}
                  </div>
                  <div className="flex justify-center mb-4">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                      <item.Icon className="w-10 h-10 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ChevronRight className="w-8 h-8 text-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              What Farmers Say
            </h2>
            <p className="text-lg text-muted">
              Join thousands of satisfied farmers worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {topTestimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                name={testimonial.name}
                location={testimonial.location}
                rating={testimonial.rating}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-r from-primary to-[#066026]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Farm?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of farmers using FarmAI to improve yields and build
            sustainable farming practices.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-secondary text-primary px-10 py-4 rounded-xl font-bold hover:bg-secondary/90 transition-all transform hover:scale-105"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}
