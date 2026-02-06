import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 flex flex-col items-center justify-center text-center">
      {/* The glass badge seen in your screenshot */}
      <div className="badge-glass mb-8 flex items-center gap-2">
        <span className="text-amber-500">✨</span>
        <span className="text-xs font-bold uppercase tracking-widest text-gray-300">AI-Powered Legal Research</span>
      </div>

      <h1 className="text-white text-5xl md:text-7xl font-bold mb-6 tracking-tight">
        Tax Law Research, <br />
        <span className="text-amber-500">Simplified</span>
      </h1>

      <p className="text-gray-400 text-lg max-w-2xl mb-10">
        Get instant, citation-backed answers to your Nigerian tax law questions.
      </p>

      <div className="flex gap-4">
        <button className="btn-primary">Get Started Free <ArrowRight size={18} /></button>
        <button className="btn-secondary">Try as Guest</button>
      </div>
    </section>
  );
}