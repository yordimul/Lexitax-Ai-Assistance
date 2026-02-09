import { Scale } from "lucide-react";

export default function ChatSuggestions() {
  return (
    <div className="max-w-2xl w-full text-center">
      <div className="bg-slate-100 p-4 rounded-xl inline-block mb-6">
        <Scale className="text-lexi-navy" size={40} />
      </div>
      
      <h2 className="mb-2" style={{ fontFamily: "Georgia, serif", fontWeight: 700, fontSize: "28px" }}>
        How can I help you today?
      </h2>
      
      <p className="text-slate-500 mb-10 font-sans">
        Ask any question about Nigerian tax law. I'll provide answers with citations.
      </p>

      <div className="space-y-3">
        {["What are corporate tax rates?", "How do I calculate withholding tax?", "What expenses are deductible?"].map((q) => (
          <button key={q} className="w-full text-left p-4 bg-slate-50 border border-slate-200 rounded-lg hover:bg-slate-100 transition font-sans text-slate-700">
            {q}
          </button>
        ))}
      </div>
    </div>
  );
}