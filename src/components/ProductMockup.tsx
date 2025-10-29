interface ProductMockupProps {
  variant?: "phone" | "tablet";
  className?: string;
}

export default function ProductMockup({
  variant = "phone",
  className = "",
}: ProductMockupProps) {
  const sizeClasses =
    variant === "phone"
      ? "Fx-auto max-w-[260px] h-[520px]"
      : "Fx-auto max-w-[500px] h-[640px]";

  return (
    <div className={`${sizeClasses} ${className} relative`}>
      <div className="w-full h-full bg-linear-to-b from-white to-green-50 rounded-3xl shadow-card flex items-center justify-center p-4">
        <div className="w-[86%] h-[90%] bg-linear-to-b from-white to-green-50/30 rounded-2xl p-4 flex flex-col items-center justify-center text-center border border-green-100">
          <div className="text-lg font-semibold text-primary mb-2">
            Dashboard
          </div>
          <div className="text-sm text-muted mb-1">Weather: Sunny • 24°C</div>
          <div className="text-sm text-muted mb-4">Crop Suggestion: Maize</div>
          <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors">
            Detect Crop Issue
          </button>
        </div>
      </div>
    </div>
  );
}
