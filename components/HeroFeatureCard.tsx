import { LucideIcon } from "lucide-react";

interface Props {
  Icon: LucideIcon;
  title: string;
  desc: string;
}

export default function HeroFeatureCard({ Icon, title, desc }: Props) {
  return (
    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-xl w-60 h-50  ">
      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-lexi-accent/20 mb-4">
        <Icon className="text-lexi-accent 
" size={22} />
      </div>

      <h3 className="text-white fontInter, system-ui, sans-serif  text-center mb-2">{title}</h3>
      <p className="text-white/70 text-sm leading-relaxed text-center">{desc}</p>
    </div>
  );
}
