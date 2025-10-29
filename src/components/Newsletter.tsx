import React, { useState } from "react";
import { Check } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email);
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-2 max-w-md"
    >
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="flex-1 px-4 py-2 rounded-lg border border-green-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
      />
      <button
        type="submit"
        className="bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors whitespace-nowrap"
      >
        {subscribed ? (
          <>
            <Check className="w-4 h-4 mr-1" />
            Subscribed!
          </>
        ) : (
          "Subscribe"
        )}
      </button>
    </form>
  );
}
