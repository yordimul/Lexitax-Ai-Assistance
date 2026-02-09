import { ArrowRight, Scale, Brain, Shield } from "lucide-react";
import HeroFeatureCard from "./HeroFeatureCard";
import SectionTransition from "./WaveTransition";

export default function TaxLawHero() {
  return (
    <section className="hero-gradient relative pt-20 pb-24 flex flex-col items-center overflow-hidden">
      {/* Glow Background */}
      <div className="navy-glow absolute inset-0 pointer-events-none" />

      {/* Badge */}
      <div className="bg-white/10 border border-white/20 px-5 py-2 rounded-full mb-10 z-10 backdrop-blur-md">
        <span className="text-white text-xs font-bold uppercase tracking-widest flex items-center gap-2">
          <span className="text-lexi-accent">✨</span>
          AI-Powered Legal Research
        </span>
      </div>

      {/* Heading */}
      <h1
        className="text-white text-center mb-8 z-10"
        style={{
          fontFamily: "Georgia, serif",
          fontWeight: 700,
          fontSize: "72px",
          lineHeight: "1.05",
          letterSpacing: "-0.5px",
        }}
      >
        Tax Law Research,
        <br />
        <span className="text-lexi-accent italic">Simplified</span>
      </h1>

      {/* Subtitle */}
      <p className="text-white/80 text-center max-w-3xl mb-12 text-[20px] leading-relaxed z-10">
        Get instant, citation-backed answers to your Nigerian tax law questions.
        Powered by AI, grounded in authoritative legal documents.
      </p>

      {/* CTA Buttons */}
      <div className="flex gap-5 mb-10 z-10">
        <button className="bg-lexi-accent text-white px-10 py-4 rounded-xl font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl transition-all">
          Get Started Free <ArrowRight size={18} />
        </button>

        <button className="border border-white/50 text-white px-10 py-4 rounded-xl font-semibold backdrop-blur-md hover:bg-white/10 transition ">
         <a href="/chat/guest"> Try as Guest</a>
        </button>
      </div>

     {/* Feature Cards */}
     <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-3 gap-4 px-3 relative z-30 mt-10">
        <HeroFeatureCard
          Icon={Scale}
          title="Legal Accuracy"
          desc="Responses backed by official tax law documents"
        />
        <HeroFeatureCard
          Icon={Brain}
          title="AI-Powered"
          desc="Natural language understanding for complex queries"
        />
        <HeroFeatureCard
          Icon={Shield}
          title="Trusted Sources"
          desc="Citations from verified legal documents"
        />
      </div>

      {/* The Exact Curve from the Screenshot */}
     
    </section>
  );
}