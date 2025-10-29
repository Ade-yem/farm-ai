import { Check } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  benefits?: string[];
  className?: string;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  benefits,
  className = "",
}: FeatureCardProps) {
  return (
    <div
      className={`bg-white rounded-xl p-6 border border-green-50 shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-2 ${className}`}
    >
      <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
        <Icon className="w-7 h-7 text-primary" />
      </div>
      <h3 className="text-xl font-bold text-primary mb-3">{title}</h3>
      <p className="text-muted mb-4 leading-relaxed">{description}</p>
      {benefits && benefits.length > 0 && (
        <ul className="space-y-2 mt-4">
          {benefits.map((benefit, index) => (
            <li key={index} className="text-sm text-text/80 flex items-start">
              <Check className="text-secondary mr-2 w-4 h-4 shrink-0 mt-0.5" />
              {benefit}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
