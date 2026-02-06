import { MessageSquare, FileText, History, Sparkles, BookOpen, ShieldCheck } from "lucide-react";

export default function FeaturesGrid() {
  const features = [
    { icon: MessageSquare, title: "Natural Language Queries", desc: "Ask questions in plain English. Our AI understands context and legal terminology." },
    { icon: FileText, title: "Citation-Backed Answers", desc: "Every response includes references to specific sections of tax law documents." },
    { icon: History, title: "Conversation History", desc: "Save and continue your research sessions. Never lose track of important discussions." },
    { icon: Sparkles, title: "Confidence Indicators", desc: "Transparency about the AI's certainty level for each response." },
    { icon: BookOpen, title: "Comprehensive Coverage", desc: "Access to a vast library of Nigerian tax laws, regulations, and guidelines." },
    { icon: ShieldCheck, title: "Secure & Private", desc: "Your queries and research are kept confidential and secure." },
  ];

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          Research Made <span className="text-amber-500">Intelligent</span>
        </h2>
        <p className="text-gray-500 text-lg max-w-3xl mx-auto">
          LexiTax AI combines advanced natural language processing with authoritative legal sources to deliver accurate, actionable insights.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <div key={i} className="p-8 rounded-5xl border border-gray-600 bg-gray-50/50 hover:shadow-lg transition-shadow">
            <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center shadow-sm border border-gray-100 mb-6">
              <f.icon className="text-slate-700" size={24} />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#132439] mb-3">
  {f.title}
</h3>

<p className="font-sans text-base leading-relaxed text-[#5c708a]">
  {f.desc}
</p>

          </div>
        ))}
      </div>
    </section>
  );
}
