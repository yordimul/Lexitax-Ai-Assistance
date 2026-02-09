import { Users, Briefcase, GraduationCap } from "lucide-react";

export default function WhoIsLexiTaxFor() {
  const users = [
    {
      Icon: Users,
      title: "Legal Consumers",
      desc: "Individuals and businesses seeking clear answers to tax-related questions without complex legal jargon."
    },
    {
      Icon: Briefcase,
      title: "Lawyers",
      desc: "Legal professionals who need quick access to tax law references and citations for their cases."
    },
    {
      Icon: GraduationCap,
      title: "Law Students",
      desc: "Students researching tax law topics for academic work, exams, and professional preparation."
    }
  ];

  return (
    <section className="bg-slate-50 py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="mb-6" style={{ fontFamily: "Georgia, serif", fontWeight: 700, fontSize: "40px", color: "#1e293b" }}>
          Who is <span className="text-lexi-accent">LexiTax AI</span> for?
        </h2>
        <p className="text-slate-500 max-w-2xl mx-auto mb-16 text-[18px]">
          Our platform is designed to serve a diverse range of users who need reliable tax law information.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {users.map((user, i) => (
            <div key={i} className="group bg-white p-10 rounded-3xl
            flex flex-col items-center
            shadow-sm
            border-1 border-transparent
            transition-all duration-300 ease-out
            hover:border-[#d7ba82]
            active:border-[#e3b052]
            hover:shadow-md 
            ">
                
              <div className="bg-slate-800 p-4 rounded-2xl mb-8  ">
                <user.Icon className="text-white " size={32} />
              </div>
              <h3 className="mb-4" style={{ fontFamily: "Georgia, serif", fontWeight: 700, fontSize: "24px" }}>
                {user.title}
              </h3>
              <p className="text-slate-500 leading-relaxed">{user.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}