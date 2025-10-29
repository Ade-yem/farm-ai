import { Star } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  location: string;
  rating: number;
  className?: string;
}

export default function TestimonialCard({
  quote,
  name,
  location,
  rating,
  className = "",
}: TestimonialCardProps) {
  return (
    <div
      className={`bg-white rounded-xl p-6 shadow-card hover:shadow-hover transition-all duration-300 ${className}`}
    >
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-secondary fill-secondary" />
        ))}
      </div>
      <blockquote className="text-muted italic mb-6 leading-relaxed">
        "{quote}"
      </blockquote>
      <div className="border-t border-green-50 pt-4">
        <div className="font-semibold text-primary">{name}</div>
        <div className="text-sm text-muted">{location}</div>
      </div>
    </div>
  );
}
