import Hero from "@/components/Hero";
import FeatureCard from "@/components/FeatureCard";
import { Scale, Brain, Shield } from "lucide-react";

export default function LandingPage() {
  return (
    <main className="landing-gradient min-h-screen px-6">
      <Hero />
      
      {/* The grid of 3 cards from your screenshot */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 pb-20">
        <FeatureCard 
          Icon={Scale} 
          title="Legal Accuracy" 
          desc="Responses backed by official tax law documents" 
        />
        <FeatureCard 
          Icon={Brain} 
          title="AI-Powered" 
          desc="Natural language understanding for complex queries" 
        />
        <FeatureCard 
          Icon={Shield} 
          title="Trusted Sources" 
          desc="Citations from verified legal documents" 
        />
      </div>
    </main>
  );
}