import { MessageSquare, FileText, History, Sparkles, BookOpen, ShieldCheck } from "lucide-react";

export default function ResearchMadeIntelligent() {
  const features = [
    { icon: MessageSquare, title: "Natural Language Queries", desc: "Ask questions in plain English." },
    { icon: FileText, title: "Citation-Backed Answers", desc: "Every response includes legal references." },
    { icon: History, title: "Conversation History", desc: "Never lose track of important discussions." },
    { icon: Sparkles, title: "Confidence Indicators", desc: "Transparency about the AI's certainty level." },
    { icon: BookOpen, title: "Comprehensive Coverage", desc: "Access to a vast library of Nigerian tax laws." },
    { icon: ShieldCheck, title: "Secure & Private", desc: "Your research is kept confidential." },
  ];

  return (
    <section className="bg-white py-24 px-6">
      <h2 className="text-center text-4xl md:text-5xl font-bold text-slate-900 mb-16">
        Research Made <span className="text-amber-500">Intelligent</span>
      </h2>
      <p className="font-sans text-center text-[18px] text-[#5c708a] leading-relaxed max-w-3xl mx-auto">
  LexiTax AI combines advanced natural language processing with authoritative legal <br/> 
  sources to deliver accurate, actionable insights.
</p>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <div key={i} className="p-8 rounded-2xl border border-gray-100 bg-gray-50/30">
            <f.icon className="text-slate-700 mb-4" size={24} />
            <h3 className="text-xl font-bold text-slate-900 mb-2">{f.title}</h3>
            <p className="text-gray-500">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}