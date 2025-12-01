import {
  Bug,
  CloudRain,
  BarChart,
  Coins,
  Droplet,
  Globe2,
  Sprout,
  TestTube,
  Users,
  ShoppingCart,
  Stethoscope, // New for Livestock Health
  Syringe,     // New for Vaccination
  Wallet,      // New for Wallet & Rewards
  Landmark,    // New for Land Lending
  WifiOff,     // New for Offline Access
} from "lucide-react";

export const features = {
  sections: [
    {
      "category": "Crop Management",
      "features": [
        {
          "title": "AI Crop Recommender",
          "description": "Choose the best crop for your land based on soil composition, climate patterns, and market trends using advanced AI algorithms.",
          "icon": Sprout,
          "benefits": [
            "Personalized crop suggestions",
            "Soil analysis integration",
            "Market demand forecasting",
            "Climate suitability assessment"
          ]
        },
        {
          "title": "Fertilizer & Chemical Recommender",
          "description": "Get safe, verified input recommendations with detailed usage guidance to maximize yield while protecting your crops and environment.",
          "icon": TestTube,
          "benefits": [
            "Fertilizer dosage calculator",
            "Chemical safety guidelines",
            "Cost optimization",
            "Environmental impact tracking"
          ]
        },
        {
          "title": "Pest & Disease Detection",
          "description": "Identify crop problems instantly using image recognition technology, even when offline. Get expert solutions tailored to your specific issue.",
          "icon": Bug,
          "benefits": [
            "Photo-based identification",
            "Offline functionality",
            "Treatment recommendations",
            "Prevention strategies"
          ]
        }
      ]
    },
    {
      "category": "Weather & Planning",
      "features": [
        {
          "title": "Weather & Climate Alerts",
          "description": "Receive localized weather forecasts and planting windows to reduce risk and optimize your farming schedule.",
          "icon": CloudRain,
          "benefits": [
            "7-day weather forecasts",
            "Rainfall predictions",
            "Temperature alerts",
            "Optimal planting windows"
          ]
        },
        {
          "title": "Smart Irrigation Planner",
          "description": "Optimize water usage with intelligent irrigation schedules based on weather patterns and crop needs.",
          "icon": Droplet,
          "benefits": [
            "Water conservation",
            "Automated scheduling",
            "Soil moisture tracking",
            "Cost savings"
          ]
        }
      ]
    },
    {
      "category": "Livestock Management", // 
      "features": [
        {
          "title": "AI Health Diagnosis",
          "description": "Detect livestock diseases early with AI-powered diagnostics and access an emergency vet call center immediately.",
          "icon": Stethoscope,
          "benefits": [
            "AI Symptom Analysis", // [cite: 15]
            "Emergency Vet Call Center", // [cite: 21]
            "Disease outbreaks alerts",
            "24/7 Expert support"
          ]
        },
        {
          "title": "Feed & Nutrition Planner",
          "description": "Optimize livestock growth with tailored feed recommendations and nutrition plans specific to animal type and age.",
          "icon": Sprout, // Reusing Sprout as organic feed indicator
          "benefits": [
            "Custom nutrition plans", // [cite: 16]
            "Feed cost optimization",
            "Growth tracking",
            "Yield maximization"
          ]
        },
        {
          "title": "Vaccination Scheduler",
          "description": "Never miss a treatment with automated vaccination schedules and digital health record keeping for your herd.",
          "icon": Syringe,
          "benefits": [
            "Automated reminders", // [cite: 17]
            "Digital health records", // [cite: 18]
            "Compliance tracking",
            "Treatment history"
          ]
        }
      ]
    },
    {
      "category": "Market & Economics",
      "features": [
        {
          "title": "Market Place",
          "description": "Buy and sell crops directly from the app to other farmers and businesses.",
          "icon": ShoppingCart,
          "benefits": [
            "Buy and sell crops directly from the app",
            "Connect with other farmers and businesses",
            "Secure transactions",
            "Easy navigation"
          ]
        },
        {
          "title": "Land Lending & Leasing",
          "description": "Access land opportunities or lease your unused land through our secure platform to expand your farming operations.",
          "icon": Landmark,
          "benefits": [
            "Secure lease agreements", // 
            "Land availability map",
            "Verified ownership",
            "Flexible tenure options"
          ]
        },
        {
          "title": "Wallet & Reward System",
          "description": "Manage transactions securely and earn rewards for sustainable farming practices and community engagement.",
          "icon": Wallet,
          "benefits": [
            "Integrated digital wallet", // 
            "Loyalty rewards",
            "Secure payments",
            "Transaction history"
          ]
        },
        {
          "title": "Market Price Tracker",
          "description": "Stay updated with real-time crop prices across markets to make informed selling decisions and maximize profits.",
          "icon": BarChart,
          "benefits": [
            "Live price updates",
            "Price history charts",
            "Market comparisons",
            "Best time to sell alerts"
          ]
        },
        {
          "title": "Financial Planning Tools",
          "description": "Track expenses, calculate ROI, and plan your farm budget with comprehensive financial management tools.",
          "icon": Coins,
          "benefits": [
            "Expense tracking",
            "Profit analysis",
            "Loan calculator",
            "Investment planning"
          ]
        }
      ]
    },
    {
      "category": "Community & Support",
      "features": [
        {
          "title": "Community Forum",
          "description": "Connect with fellow farmers, share experiences, and learn from agricultural experts in a supportive community.",
          "icon": Users,
          "benefits": [
            "Knowledge sharing",
            "Expert Q&A sessions",
            "Success stories",
            "Networking opportunities"
          ]
        },
        {
          "title": "Multilingual Support",
          "description": "Use the app in your native language with support for 20+ languages, breaking down communication barriers.",
          "icon": Globe2,
          "benefits": [
            "Local language interface",
            "Voice commands in your language",
            "Cultural farming practices",
            "Accessibility for all"
          ]
        },
        {
          "title": "Offline & Low-Data Mode",
          "description": "Farm without boundaries. Access core features and save data even in remote areas with poor internet connectivity.",
          "icon": WifiOff,
          "benefits": [
            "Works without internet", // 
            "Data synchronization",
            "Low bandwidth optimization",
            "Local storage"
          ]
        }
      ]
    }
  ]
}
